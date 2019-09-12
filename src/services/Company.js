import axios from 'axios';
import { GET_ROOT_URL } from '../config/URL';


export const RegisterCompany = (token, company) => {
  let config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }
  const PromiseResponse = axios.post(GET_ROOT_URL + 'secure/company', company, config)
  return PromiseResponse
}

