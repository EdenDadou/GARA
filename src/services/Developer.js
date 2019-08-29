import axios from 'axios';
import { GET_ROOT_URL } from '../config/URL';

export const postDeveloper = (developer) => {
  axios({
    method: 'post',
    url: GET_ROOT_URL + 'developer/create',
    data: developer
  }).then(res => {
    console.log(res);
    console.log(res.data);
    
  }).catch(error => {
      console.log(error.message);
    })
}

export let responsePostDev= postDeveloper();