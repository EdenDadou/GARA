import axios from 'axios';
import { GET_ROOT_URL } from '../config/URL';

export const MobileMoneyOperator = (token) => {
    let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }
    const PromiseResponse = axios.get(GET_ROOT_URL + 'agency/mobilemoneylist/country/SN', config)
    return PromiseResponse
  }