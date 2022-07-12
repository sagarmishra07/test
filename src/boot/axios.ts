import axios, { AxiosInstance } from 'axios';
import { boot } from 'quasar/wrappers';
import { errorNotify, successNotify } from 'src/utils/notify';

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance;
  }
}

export default boot(({ Vue, store, router }) => {
  axios.defaults.baseURL = 'https://rum-api.herokuapp.com/api/';
  axios.defaults.headers.common.Authorization = store.getters['user/getToken']
    ? `${store.getters['user/getToken']}`
    : '';

  axios.defaults.headers['Accept-Language'] = store.getters['user/getLocale']
    ? store.getters['user/getLocale']
    : 'en-us';

  // Add a request interceptor
  axios.interceptors.request.use(
    function(config) {
      // Do something before request is sent
      return config;
    }, // function(config)
    function(error) {
      // Do something with request error
      return Promise.reject(error);
    } // function(error)
  ); // axios.interceptors.request.use

  axios.interceptors.response.use(
    function(response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      response.status === 200 &&
        !!response.data.message &&
        successNotify(response.data.message);
      return response.data;
    }, // function(response)
    function(error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      if (error?.response?.status === 403) {
        errorNotify(error?.response?.data?.message, error);
        return;
      }
      if (error?.response?.status === 401) {
        console.log(error);
        // store.dispatch('user/clearSession');
        // router.go(0);
      }
      return Promise.reject(error?.response?.data?.message);
    } // function(error)
  ); // axios.interceptors.response.use
  Vue.prototype.$axios = axios;
});
