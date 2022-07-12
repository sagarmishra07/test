export interface ILoginHistory {
  id: number,
  fullName: string,
  category: string,
  loginTime: Date,
  loginDuration: string,
}

const iLoginHistory: ILoginHistory = {
  id: 0,
  fullName: '',
  category: '',
  loginTime: new Date(),
  loginDuration: ''
};

export interface ILoginHistoryDTO {
  id: number,
  fullName: string,
  category: string,
  loginTime: Date,
  loginDuration: string,
}
