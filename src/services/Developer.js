import axios from 'axios';
import { GET_ROOT_URL } from '../config/URL';


export const RegisterDeveloper = (developer) => {
  const PromiseResponse = axios.post(GET_ROOT_URL + 'developer/create', developer)
  return PromiseResponse
}

export const LoginDeveloper = (user) => {
  const PromiseResponse = axios.post(GET_ROOT_URL + 'developer/token', user)
  return PromiseResponse
}

export async function VerifToken() {
  // let config = {
  //   headers: {
  //     Authorization : 'Bearer 073e1378-3e7a-480f-a1fb-4cc6bb4c0071',
  //   }
  // }

  const PromiseResponse = await fetch(GET_ROOT_URL + 'secure/mobilemoneyoperator', {
    method: 'get',
    headers: {'Authorization': 'Bearer 073e1378-3e7a-480f-a1fb-4cc6bb4c0071'}
  })
  return PromiseResponse
}






