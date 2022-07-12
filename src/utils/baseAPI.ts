import { DeleteRequest, GetRequest, PostRequest, PutRequest } from 'src/plugins/http';

const baseAPI =(sendName:string , data:any)=>{
  const name = sendName.trim()
  return{
    [`get${name}`]:async ()=>await GetRequest(name, {}),
    [`getOne${name}`]:async ()=>await GetRequest(name, data.id),
    [`post${name}`]:async ()=>await PostRequest(name, data, {}),
    [`put${name}`]:async ()=>await PutRequest(name, data, {}),
    [`delete${name}`]:async ()=>await DeleteRequest(name, data, {}),
  }

}

export default baseAPI;
