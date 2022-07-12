import { IS_DEV } from 'src/utils/env';
import { randomArray } from 'src/utils/randomArrayGenerator';
import { IUserAdministration } from 'src/utils/models/interfaces/Management/UserAdministration';
import moment from 'moment';
import { ILoginHistory } from 'src/utils/models/interfaces/Management/LoginHistory';
import { random } from 'src/utils/randomNumberGenerator';

export const mockLoginHistory: ILoginHistory = IS_DEV ? {
  id: Math.random(),
  fullName: 'John Doe',
  loginTime: new Date(),
  category: 'ADMIN',
  loginDuration: '20m'
} : {
  id: 0,
  fullName: '',
  loginTime: new Date(),
  category: '',
  loginDuration: ''
};

export const mockLoginHistoryFunction = (num: number): ILoginHistory[] => {
  let i = 1;
  const data: ILoginHistory[] = [];
  while (i <= num) {
    data.push({
      id: Math.random(),
      fullName: 'John Doe',
      loginTime: new Date(),
      loginDuration: '20m',
      category: randomArray(['ADMIN', 'OWNER', 'STAFF'])
    });
    i++;
  }
  console.log(data);
  return data;
};
