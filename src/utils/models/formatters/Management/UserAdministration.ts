import { IUserAdministration, IUserAdministrationDTO } from 'src/utils/models/interfaces/Management/UserAdministration';

export const managementDTO = {
  create: (data: IUserAdministration) => ({
    fullName: data.fullName,
    createdDate: data.createdDate,
    category: data.category
  }),
  send: (data: IUserAdministration): IUserAdministration => ({
    id: data.id,
    fullName: data.fullName,
    createdDate: data.createdDate,
    category: data.category
  }),
  receive: (data: IUserAdministrationDTO): IUserAdministration => ({
    id: data.id,
    fullName: data.fullName,
    createdDate: data.createdDate,
    category: data.category
  })
};
