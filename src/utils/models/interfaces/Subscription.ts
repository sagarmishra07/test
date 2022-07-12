export enum subscriptionENUM {
  MONTHLY = 'MONTHLY',
  YEARLY = 'YEARLY'
}


export interface ISubscriptionPaymentDTO {
  createdAt: string,
  id: number,
  subscriptionName: string,
  subscriptionPrice: number,
  subscriptionType: subscriptionENUM,
  updatedAt: string,
}
export const   iSubscriptionPaymentDTO : ISubscriptionPaymentDTO = {
  createdAt: '',
  id: 0,
  subscriptionName:'John ',
  subscriptionPrice: 0,
  subscriptionType: subscriptionENUM.MONTHLY,
  updatedAt: '',
}

export interface ISubscriptionPayment {
  id: number
  subscriptionName: string,
  subscriptionPrice: number,
  subscriptionType: subscriptionENUM,
}

export const iSubscriptionPayment: ISubscriptionPayment = {
  id: 0,
  subscriptionName: '',
  subscriptionPrice: 0,
  subscriptionType: subscriptionENUM.MONTHLY
};

