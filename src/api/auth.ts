import { PostRequest } from 'src/plugins/http';
import { ISignup } from 'src/utils/models/interfaces/Auth';

export const APIAuthenticate = (data) => {
  return PostRequest('auth/signin', data);
};
export const APISignup = (data: ISignup) => PostRequest('/auth/signup/', data);
export const APIAuthenticatePass = ({ password, oldPassword, userId }) => {
  return PostRequest('auth/changePassword', { userId, password, oldPassword });
};
