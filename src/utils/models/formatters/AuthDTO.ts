import { ISignin, ISigninDTO, ISignup, ISignupDTO } from 'src/utils/models/interfaces/Auth';

export const AuthDTO = (data: ISigninDTO): ISignin => ({
  userNameOrEmail: data?.userNameOrEmail?.toString() || '',
  password: data?.password?.toString() || ''
});
export const SignupDTO = (data: ISignupDTO): ISignup => ({
  password: data?.password || '',
  username: data?.username || '',
  fullName: data.fullName || '',
  email: data.email || ''
});
