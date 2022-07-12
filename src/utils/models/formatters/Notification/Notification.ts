import {
  INotifications,
  INotificationsDTO
} from 'src/utils/models/interfaces/Notification/Notification';

export const managementDTO = {
  create: (data: INotifications) => ({
    name: data.name,

    title: data.title,
    type: data.type,
    description: data.description,
    amount: data.amount,
    date: data.date,
    //payment
    paymentMode: data.paymentMode,
    grace: {
      graceForDays: data.grace.graceForDays,
      totalGraceRequest: data.grace.totalGraceRequest,
      paymentTiming: data.grace.paymentTiming,
      dueByDays: data.grace.dueByDays
    },
    //Grace


    //breaker status
    breaker: {
      openFor: data.breaker.openFor,
      dueByAmount: data.breaker.dueByAmount,
      message: data.breaker.message
    }
  }),
  send: (data: INotifications): INotifications => ({
    id: data.id,
    name: data.name,
    title: data.title,
    type: data.type,
    description: data.description,
    amount: data.amount,
    //payment
    paymentMode: data.paymentMode,
    date: data.date,
    //Grace
    grace: {
      graceForDays: data.grace.graceForDays,
      totalGraceRequest: data.grace.totalGraceRequest,
      paymentTiming: data.grace.paymentTiming,
      dueByDays: data.grace.dueByDays
    },
    //breaker status
    breaker: {
      openFor: data.breaker.openFor,
      dueByAmount: data.breaker.dueByAmount,
      message: data.breaker.message

    }
  }),
  receive: (data: INotificationsDTO): INotifications => ({
    id: data.id,
    name: data.name,
    title: data.title,
    type: data.type,
    description: data.description,
    amount: data.amount,
    //payment
    paymentMode: data.paymentMode,
    date: data.date,
    //Grace
    grace: {
      graceForDays: data.grace.graceForDays,
      totalGraceRequest: data.grace.totalGraceRequest,
      paymentTiming: data.grace.paymentTiming,
      dueByDays: data.grace.dueByDays
    },
    //breaker status
    breaker: {
      openFor: data.breaker.openFor,
      dueByAmount: data.breaker.dueByAmount,
      message: data.breaker.message

    }
  })
};
