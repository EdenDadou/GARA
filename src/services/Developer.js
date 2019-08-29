import axios from 'axios';
import { GET_ROOT_URL } from '../config/URL';

 export const APIstatus;

export const postDeveloper = (developer) => {
  axios.post( GET_ROOT_URL + 'developer/create', developer)
  .then(res => {
    if(res.status === 200){
      APIstatus = 200;
    }
  })
}


