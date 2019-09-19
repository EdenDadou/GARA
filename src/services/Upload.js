import axios from 'axios';
import { GET_ROOT_URL } from '../config/URL';

export const PostBook = (Token, Ebook) => {
    let config = {
        headers: {
          'Authorization': 'Bearer ' + Token
        }
      }
    const PromiseResponse = axios.post(GET_ROOT_URL + 'secure/book/create' , Ebook, config)
    return PromiseResponse
  }
