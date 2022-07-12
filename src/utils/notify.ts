import { Notify } from 'quasar';

export const successNotify=(message:string)=>{
  Notify.create({
    type:'positive',
    message:message,
    position:'bottom-right'
  })
}
export const errorNotify=(message:string , error: any)=>{
  console.error("Error>>>>" , error);
  Notify.create({
    type:'negative',
    message:message,
    position:'bottom-right'
  })
}
export const infoNotify=(message:string)=>{
  Notify.create({
    type:'info',
    message:message,
    position:'bottom-right'
  })
}
