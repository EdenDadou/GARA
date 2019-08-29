import axios from 'axios';
import { GET_ROOT_URL } from '../config/URL';

export const postDeveloper = (developer) => {
  const PromiseResponse =  axios.post( GET_ROOT_URL + 'developer/create', developer)

    return PromiseResponse
}



