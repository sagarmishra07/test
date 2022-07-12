import { ITotalAccount } from 'src/utils/models/interfaces/TotalAccount';
import { IS_DEV } from 'src/utils/env';
import { random } from 'src/utils/randomNumberGenerator';
import { CATEGORIES } from 'src/utils/mock/CATEGORIES';
import { randomArray } from 'src/utils/randomArrayGenerator';

export const mockTotalAccount: ITotalAccount = IS_DEV ? {
  id: Math.random(),
  fullName: 'John Doe',
  amount: 1000,
  status:'',
  meterCategory: 'Electricity',
  customerId: 'M'
} : {
  id: Math.random(),
  customerId: '',
  fullName: '',
  status:'',
  amount: 0,
  meterCategory: ''
};

export const mockTotalAccounts = (num: number)=>{
  let i = 1;
  const data:ITotalAccount[]= [];
  while(i<=num){
    data.push({
      id: Math.random(),
      fullName: mockTotalAccount.fullName + i.toString(),
      amount:  random(1,9,1000),
      meterCategory: CATEGORIES[random(0,CATEGORIES.length-1)],
      status : randomArray(['paid' , 'due']),
      customerId: mockTotalAccount.customerId + i
    });
    i++;
  }
  return data;
}
