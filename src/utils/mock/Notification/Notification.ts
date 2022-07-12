import { IS_DEV } from 'src/utils/env';
import { randomArray } from 'src/utils/randomArrayGenerator';
import {
  iNotifications,
  INotifications,
  NotificationType
} from 'src/utils/models/interfaces/Notification/Notification';
import { random } from 'src/utils/randomNumberGenerator';
import { randomDate } from 'src/utils/randomDate';

export const mockNotification: INotifications = IS_DEV ? {
  id: Math.random(),
  name: 'John',

  title: 'title 1',
  type: NotificationType.GRACE,
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet animi blanditiis cum dolores ducimus, earum excepturi facilis fugiat ipsa iure minima molestias natus perferendis quaerat quis ratione sapiente voluptatum.',
  amount: '300',
  date: new Date(),
  //payment
  paymentMode: 'esewa',
  //Grace
  grace: {
    graceForDays: '12',
    totalGraceRequest: 0,
    paymentTiming: 0,
    dueByDays: 0
  },
  //breaker status
  breaker: {
    openFor: 11,
    dueByAmount: 0,
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequatur distinctio doloremque esse est, eveniet iure iusto labore mollitia nisi nostrum perferendis quam quidem, reiciendis sed ut voluptatem. Numquam, quis?'
  }

} : iNotifications;

export const mockNotificationFunction = (num: number): INotifications[] => {
  let i = 1;
  const data: INotifications[] = [];
  while (i <= num) {
    const notificationType: NotificationType = randomArray(['BREAKER',
      'GRACE',
      'PAYMENT']);
    data.push({
      id: Math.random(),
      name: 'John' + i,

      title: `${notificationType} from user John ${i}`,
      type: notificationType,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet animi blanditiis cum dolores ducimus, earum excepturi facilis fugiat ipsa iure minima molestias natus perferendis quaerat quis ratione sapiente voluptatum.',
      amount: random(300, 10000, i).toString(),
      date: randomDate(i),
      //payment
      paymentMode: notificationType === 'PAYMENT' && randomArray(['eSewa', 'bank', 'cash', 'fonePay']),
      //Grace
      grace: {
        graceForDays: notificationType === 'GRACE' && random(1, 5, i).toString() || '',
        totalGraceRequest: random(3, 4, i),
        paymentTiming: random(3, 4, i),
        dueByDays: random(3, 4, i),
      },
      //breaker status
      breaker: {
        openFor: random(3, 8, i),
        dueByAmount: notificationType === 'BREAKER' && random(100, 50000, i) || 0,
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequatur distinctio doloremque esse est, eveniet iure iusto labore mollitia nisi nostrum perferendis quam quidem, reiciendis sed ut voluptatem. Numquam, quis?'
      }
    })
    ;
    i++;
  }
  let j = 1;
  while (j <= 3) {
    data[j].date = new Date();
    j++;
  }
  return data;
};
