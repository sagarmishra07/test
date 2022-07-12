export enum NotificationType {
  BREAKER = 'BREAKER',
  GRACE = 'GRACE',
  PAYMENT = 'PAYMENT',
}

export interface INotifications {
  id: number;
  name: string,
  title: string;
  type: NotificationType;
  description: string;
  amount: string;
  date: Date;

  //payment
  paymentMode: string;
  //Grace
  grace: {
    graceForDays: string;
    totalGraceRequest: number;
    paymentTiming: number;
    dueByDays:number;
  }
  //breaker status
  breaker: {
    openFor: number;

    dueByAmount: number,
    message:string,

  },
}

export const iNotifications: INotifications = {
  id: 0,
  name: '',
  title: '',
  type: NotificationType.GRACE,
  description: '',
  amount: '',
  date: new Date(),
  //payment
  paymentMode: '',
  //Grace
  grace: {
    graceForDays: '',
    totalGraceRequest: 0,
    paymentTiming: 0,
    dueByDays:0,
  },
  //breaker status
  breaker: {
    openFor: 11,

    dueByAmount: 0,
    message:'',
  }

};

export interface INotificationsDTO {
  id: number;
  name: string,
  title: string;
  type: NotificationType;
  description: string;
  amount: string;
  date: Date;
  //payment
  paymentMode: string;
  //Grace
  grace: {
    graceForDays: string;
    totalGraceRequest: number;
    paymentTiming: number;
    dueByDays:number;
  }
  //breaker status
  breaker: {
    openFor: number;

    dueByAmount: number,
    message:string,
  },

}
