import axios from 'axios';
import { GET_ROOT_URL } from '../config/URL';

export const RegisterDeveloper = (developer) => {
  const PromiseResponse = axios.post(GET_ROOT_URL + 'developer/create', developer)
  return PromiseResponse
}

export const LoginDeveloper = (email, password) => {
  const PromiseResponse = axios.post(GET_ROOT_URL + 'developer/token', {email, password})
  return PromiseResponse
}


export const DeveloperInfo = (token,id) => {
  let config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }
  const PromiseResponse = axios.get(GET_ROOT_URL + 'secure/developer/'+id, config)
  return PromiseResponse
}






