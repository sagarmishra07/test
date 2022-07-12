import { ActionTree, GetterTree, MutationTree } from 'vuex';
import { StateInterface } from 'src/store';
import { APIAuthenticate, APISignup } from 'src/api/auth';
import {
  iSignin,
  ISignin,
  iSignup,
  ISignup
} from 'src/utils/models/interfaces/Auth';
import { errorNotify } from 'src/utils/notify';
import { AuthDTO } from 'src/utils/models/formatters/AuthDTO';

export interface IState {
  singnIn: ISignin;
  singnUp: ISignup;
  isAuth: boolean;
}

const iState: IState = {
  singnUp: iSignup,
  singnIn: iSignin,
  isAuth: false
};
//Store Start
const getters: GetterTree<IState, StateInterface> = {};
const state = {
  ...iState
};
const mutations: MutationTree<IState> = {};
const actions: ActionTree<IState, StateInterface> = {
  async reAuth({ commit }) {
    try {
      console.log('ReAuth');
    } catch (e) {
      errorNotify('User not Authenticated', e);
    }
  },
  async authUser({ commit }, data: ISignin) {
    try {
      const res = await APIAuthenticate(AuthDTO(data));
      if (!!res) {
      }
    } catch (e) {
      errorNotify('Could not Login', e);
    }
  },
  async signupUser({ commit }, data) {
    try {
      const res = await APISignup(data);
      if (res.requestStatus) {
        return true;
      }
    } catch (e) {
      errorNotify('Could not signup', e);
    }
  }
};

export default {
  getters,
  state,
  mutations,
  actions
};
