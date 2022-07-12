import { IS_DEV } from 'src/utils/env';
import { random } from 'src/utils/randomNumberGenerator';
import { IPaymentInfo } from 'src/utils/models/interfaces/DailyOperations';
import { iSubscriptionPaymentDTO } from 'src/utils/models/interfaces/Subscription';

export const mockDailyOperation: IPaymentInfo = IS_DEV ? {


  amountPaid: 1000,
  id: Math.random(),
  remainingAmount: 1000,
  subscription: iSubscriptionPaymentDTO,
  user: 'Name'

} : {

  amountPaid: 1000,
  id: Math.random(),
  remainingAmount: 1000,
  subscription: iSubscriptionPaymentDTO,
  user: 'Name'

};

export const mockDailyOperations = (num: number): IPaymentInfo[] => {
  let i = 1;
  const data: IPaymentInfo[] = [];
  while (i <= num) {
    data.push({
      id: Math.random(),
      remainingAmount: 1000 + i,
      subscription: iSubscriptionPaymentDTO,
      user: 'Name',
      amountPaid: random(1, 9, 1000)
    });
    i++;
  }
  console.log(data);
  return data;
};
