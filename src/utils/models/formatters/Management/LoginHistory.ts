import { ILoginHistory, ILoginHistoryDTO } from 'src/utils/models/interfaces/Management/LoginHistory';

export const managementDTO = {
  create: (data: ILoginHistory) => ({
    fullName: data.fullName,
    category: data.category,
    loginTime: data.loginTime,
    loginDuration: data.loginDuration
  }),
  send: (data: ILoginHistory): ILoginHistory => ({
    id: data.id,
    fullName: data.fullName,
    category: data.category,
    loginTime: data.loginTime,
    loginDuration: data.loginDuration
  }),
  receive: (data: ILoginHistoryDTO): ILoginHistory => ({
    id: data.id,
    fullName: data.fullName,
    category: data.category,
    loginTime: data.loginTime,
    loginDuration: data.loginDuration
  })
};
