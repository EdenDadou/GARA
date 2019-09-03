import axios from 'axios';
import { GET_ROOT_URL } from '../config/URL';


export const RegisterDeveloper = (developer) => {
  const PromiseResponse =  axios.post( GET_ROOT_URL + 'developer/create', developer)
    return PromiseResponse
}

export const LoginDeveloper = (user) => {
  const PromiseResponse =  axios.post( GET_ROOT_URL + 'developer/token', user)
    return PromiseResponse
}

export const VerifToken = (token) => {
  const PromiseResponse =  axios.get( GET_ROOT_URL + 'secure/mobilemoneyoperator',   {headers: {
    "Bearer " : token
  }
})
    return PromiseResponse
}






