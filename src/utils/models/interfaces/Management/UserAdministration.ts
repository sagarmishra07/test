export interface IUserAdministration {
  id: number,
  fullName: string,
  createdDate: string,
  category: string,
}

const IUserAdministration: IUserAdministration = {
  id: 0,
  fullName: '',
  createdDate: '',
  category: ''
};
export interface IUserAdministrationDTO {
  id: number,
  fullName: string,
  createdDate: string,
  category: string,
}
