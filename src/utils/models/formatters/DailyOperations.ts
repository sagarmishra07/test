import { IPaymentInfo, IPaymentInfoDTO } from 'src/utils/models/interfaces/DailyOperations';

export const SubscriptionDTO = {
  create: (data: IPaymentInfo) => ({
    amountPaid: data.amountPaid,
    remainingAmount: data.remainingAmount,
    subscription: data.subscription,
    user: data.user
  }),
  send: (data: IPaymentInfo): IPaymentInfo => ({
    amountPaid: data.amountPaid,
    id: data.id,
    remainingAmount: data.remainingAmount,
    subscription: data.subscription,
    user: data.user
  }),
  receive: (data: IPaymentInfoDTO): IPaymentInfo => ({
    amountPaid: data.amountPaid,
    id: data.id,
    remainingAmount: data.remainingAmount,
    subscription: data.subscription,
    user: data.user
  })
};
