import axios from 'axios';
import { GET_ROOT_URL } from '../config/URL';

export const MobileMoneyOperator = (Token, CountryCode) => {
    let config = {
        headers: {
          'Authorization': 'Bearer ' + Token
        }
      }
    const PromiseResponse = axios.get(GET_ROOT_URL + 'secure/agency/mobilemoneylist/country/' + CountryCode, config)
    return PromiseResponse
  }



export const AgencyCountry = (token) => {
  let config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }
  const PromiseResponse = axios.get(GET_ROOT_URL + 'secure/agency/getagencycountries', config)
  return PromiseResponse
}

