import { IS_DEV } from 'src/utils/env';
import { randomArray } from 'src/utils/randomArrayGenerator';
import { IUserAdministration } from 'src/utils/models/interfaces/Management/UserAdministration';
import moment from 'moment';

export const mockUserAdministration: IUserAdministration = IS_DEV ? {
  id: Math.random(),
  fullName: 'John Doe',
  createdDate: Date.now().toString(),
  category: "ADMIN"
} : {
  id: 0,
  fullName: '',
  createdDate: Date.now().toString(),
  category: "OWNER"
};

export const mockUserAdministrationFunction = (num: number): IUserAdministration[] => {
  let i = 1;
  const data: IUserAdministration[] = [];
  while (i <= num) {
    data.push({
      id: Math.random(),
      fullName: 'John Doe',
      createdDate: moment(Date.now()).format('YYYY-MM-DD'),
      category: randomArray(['ADMIN','OWNER' , 'STAFF'])
    });
    i++;
  }
  console.log(data);
  return data;
};
