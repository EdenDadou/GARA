import axios from 'axios';
import { GET_ROOT_URL } from '../config/URL';


export const RegisterCompany = (company) => {
  const PromiseResponse = axios.post(GET_ROOT_URL + 'secure/company', company)
  return PromiseResponse
}

