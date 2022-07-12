import { errorNotify } from 'src/utils/notify';
import { DeleteRequest, GetRequest, PostRequest, PutRequest } from 'src/plugins/http';

const baseState = (sendName: string, DTO: any = {}) => {
  const name:string = sendName.trim().toLowerCase();
  return {
    BASEState: {
      [`${name}List`]: null,
      [`${name}`]: null
    },
    BASEMutations: {
      [`set${name}List`](state, payload) {
        console.log('Commit list', name);
        state[`${name}List`] = payload;
      },
      [`set${name}`](state, payload) {
        console.log('Commit', name);
        state[`${name}`] = payload;
      }
    },
    BASEActions: {
      [`getAll${name}`]: async ({ commit }, data) => {
        try {
          console.log('base Get All', name);
          const res = await GetRequest(`/${name}`, data);
          const send = res?.map(data => DTO?.receive(data)) || [];
          console.log(send);
          commit(`set${name}List`, send);
        } catch (e) {
          errorNotify(`Could not get ${name}`, e);
        }

      },
      [`getOne${name}`]: async ({ commit }, data) => {
        try {
          console.log('base Get All', name);
          const res = await GetRequest(`/${name}/${data.id}`, data);
          const send = DTO.receive(res.data);
          console.log(send);
          commit(`set${name}`, send);
        } catch (e) {
          errorNotify(`Could not get ${name}`, e);
        }
      },
      [`post${name}`]: async ({ dispatch }, data) => {
        try {
          const send = DTO.create(data);

          const res = await PostRequest(`/${name}`, send);
          console.log('base post All', res);
        } catch (e) {
          errorNotify(`Could not add ${name}`, e);
        } finally {
          dispatch(`getAll${name}`);
        }
      },
      [`put${name}`]: async ({ dispatch }, data) => {
        try {
          const { id, change } = data;
          const send = DTO.send(change);
          const res = await PutRequest(`/${name}/${id}`, send);
          console.log('base put All', res);
        } catch (e) {
          errorNotify(`Could not update ${name}`, e);
        } finally {
          dispatch(`getAll${name}`);
        }
      },
      [`delete${name}`]: async ({ dispatch },id) => {
        try {

          const res = await DeleteRequest(`/${name}/${id}`,);
          console.log('base put All', name);
        } catch (e) {
          errorNotify(`Could not delete ${name}`, e);
        } finally {
          dispatch(`getAll${name}`);
        }
      },
      [`deleteSoft${name}`]: ({ dispatch }, data) => {
        try {
          const { id, change } = data;
          console.log('base put All', name);
        } catch (e) {
          errorNotify(`Could not soft delete ${name}`, e);
        } finally {
          dispatch(`getAll${name}`);
        }
      }
    }
  };
};
export default baseState;
