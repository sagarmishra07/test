import { ISubscriptionPayment, ISubscriptionPaymentDTO } from 'src/utils/models/interfaces/Subscription';
import { errorNotify } from 'src/utils/notify';

export const SubscriptionDTO = {
  create: (data: ISubscriptionPayment) => ({
    subscriptionName: data.subscriptionName,
    subscriptionPrice: Number(data.subscriptionPrice) !== NaN && Number(data.subscriptionPrice) || errorNotify('Price should not number', ''),
    subscriptionType: data.subscriptionType
  }),
  send: (data: ISubscriptionPayment): ISubscriptionPayment => ({
    id: data.id,
    subscriptionName: data.subscriptionName,
    subscriptionPrice: data.subscriptionPrice,
    subscriptionType: data.subscriptionType
  }),
  receive: (data: ISubscriptionPaymentDTO): ISubscriptionPayment => ({
    id: data.id,
    subscriptionName: data.subscriptionName,
    subscriptionPrice: data.subscriptionPrice,
    subscriptionType: data.subscriptionType
  })
};
