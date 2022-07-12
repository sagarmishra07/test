import { IS_DEV } from 'src/utils/env';
import { random } from 'src/utils/randomNumberGenerator';
import { BASIS } from 'src/utils/mock/CATEGORIES';
import { IRates } from 'src/utils/models/interfaces/Management/Rates';
import { randomArray } from 'src/utils/randomArrayGenerator';

export const mockRate: IRates = IS_DEV ? {
  id: Math.random(),
  category: 'John Doe',
  amount: 1000,
  basis: 'Electricity',
  rateCategory: true
} : {
  id: Math.random(),
  category: '',
  amount: 0,
  basis: '',
  rateCategory: false
};

export const mockRates = (num: number): IRates[] => {
  let i = 1;
  const data: IRates[] = [];
  while (i <= num) {
    data.push({
      id: Math.random(),
      category: mockRate.category + i.toString(),
      amount: random(1, 9, 1000),
      basis: BASIS[random(0, BASIS.length - 1)],
      rateCategory: randomArray([true, false])
    });
    i++;
  }
  console.log(data);
  return data;
};
