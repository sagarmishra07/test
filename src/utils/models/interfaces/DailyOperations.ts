import { iSubscriptionPaymentDTO, ISubscriptionPaymentDTO } from 'src/utils/models/interfaces/Subscription';

export interface IPaymentInfo {
  amountPaid: number;
  id: number;
  remainingAmount: number;
  subscription: ISubscriptionPaymentDTO;
  user: any
}

export interface IPaymentInfoDTO {
  amountPaid: number,
  createdAt: string,
  id: number,
  remainingAmount: number,
  subscription: ISubscriptionPaymentDTO,
  updatedAt: string,
  user: any,
}

export const iPaymentInfo: IPaymentInfo = {
  amountPaid: 0,
  id: 0,
  remainingAmount: 0,
  subscription: iSubscriptionPaymentDTO,
  user: {}
};
