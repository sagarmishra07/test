import { IS_DEV } from 'src/utils/env';
import { random } from 'src/utils/randomNumberGenerator';
import { iSubscriptionPayment, ISubscriptionPayment, subscriptionENUM } from 'src/utils/models/interfaces/Subscription';


export const mockSubscription: ISubscriptionPayment = IS_DEV ? {
  id: 0,
  subscriptionName: 'JOHN',
  subscriptionType: subscriptionENUM.MONTHLY,
  subscriptionPrice: 100
} : iSubscriptionPayment;

export const mockSubscriptionAccount = (num: number) => {
  let i = 1;
  const data: ISubscriptionPayment[] = [];
  while (i <= num) {
    data.push({
      id: i,
      subscriptionName: 'JOHN' + i.toString(),
      subscriptionPrice: random(1, 9, 1000),
      subscriptionType: subscriptionENUM.YEARLY
    });
    i++;
  }
  return data;
};
