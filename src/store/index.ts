import { store } from 'quasar/wrappers';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

// @ts-ignore
import modules from './modules';


/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  user: unknown;
}

export default store(function({ Vue }) {
  Vue.use(Vuex);

  const Store = new Vuex.Store<StateInterface>({
    modules,
    plugins: [
      createPersistedState({
        paths: ['user', 'tenant']
      })
    ], // plugins
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEBUGGING
  });
  return Store;
});

