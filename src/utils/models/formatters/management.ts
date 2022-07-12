import {
  ISubscriptionPayment,
  iSubscriptionPaymentDTO,
  ISubscriptionPaymentDTO
} from 'src/utils/models/interfaces/Subscription';
import { IPaymentInfo, IPaymentInfoDTO } from 'src/utils/models/interfaces/DailyOperations';

export const managementDTO = {
  create: (data: IPaymentInfo) => ({
    amountPaid: data.amountPaid,
    remainingAmount: data.remainingAmount,
    subscription: data.subscription,
    user: data.user
  }),
  send: (data: IPaymentInfo):IPaymentInfo => ({
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
