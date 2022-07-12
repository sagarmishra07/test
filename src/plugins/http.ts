import Vue from 'vue';

export const PostRequest = (url, params, config = {}) => {
  return Vue.prototype.$axios.post(url, params, config);
};

export const GetRequest = (url, params={}, config = {}) => {
  return Vue.prototype.$axios.get(url, params, config);
};

export const DeleteRequest = (url, params={}, config = {}) => {
  return Vue.prototype.$axios.delete(url, params, config);
};
export const PutRequest = (url, params, config = {}) => {
  return Vue.prototype.$axios.put(url, params, config);
};
