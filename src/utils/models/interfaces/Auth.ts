export interface ISignin {
  userNameOrEmail: string,
  password: string,
}

export const iSignin: ISignin = {
  userNameOrEmail: '',
  password: ''
};

export interface ISigninDTO {
  userNameOrEmail: string,
  password: string,
}

export interface ISignup {
  email: string;
  fullName: string;
  password: string;
  username: string;
}

export const iSignup: ISignup = {
  email: '',
  fullName: '',
  password: '',
  username: ''
};

export interface ISignupDTO extends  ISignup{
  type: string;
}
