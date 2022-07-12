import { IS_DEV } from 'src/utils/env';
import { random } from 'src/utils/randomNumberGenerator';
import { BASIS } from 'src/utils/mock/CATEGORIES';
import { IRates } from 'src/utils/models/interfaces/Management/Rates';
import { randomArray } from 'src/utils/randomArrayGenerator';
import { IUserAdministration } from 'src/utils/models/interfaces/Management/UserAdministration';
import moment from 'moment';
import { ITenant_Admin_Staff } from 'src/utils/models/interfaces/Management/tenants_Admin_Staff';

export const mockTenantsAdminStaff: ITenant_Admin_Staff = IS_DEV ? {

  id: Math.random(),
  fullName: 'JOHN',
  createdAt: new Date(),
  category: 'Category',
  propertyId: 3,
  monthlyRent: 12333,
  meterStatus: 'on',
  phoneNumber: '9879879877'
} : {
  id: Math.random(),
  fullName: '',
  createdAt: new Date(),
  category: '',
  propertyId: 0,
  monthlyRent: 0,
  meterStatus: '',
  phoneNumber: ''
};

export const mockTenantsAdminStaffFunction = (num: number): ITenant_Admin_Staff[] => {
  let i = 1;
  const data: ITenant_Admin_Staff[] = [];
  while (i <= num) {
    data.push({
      id: Math.random(),
      fullName: 'JOHN'+i,
      createdAt: new Date(),
      category: 'Category',
      propertyId: i,
      monthlyRent: 12333,
      meterStatus: 'on',
      phoneNumber: '987987987'+i

    });
    i++;
  }
  console.log(data);
  return data;
};
