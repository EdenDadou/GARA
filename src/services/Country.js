import axios from 'axios';
import { GET_ROOT_URL } from '../config/URL';




export async function getCountries() {
    let APIcountrie =[]
    await axios.get(GET_ROOT_URL + 'utils/countries')
    .then(res => { console.log(res);
        APIcountrie = res.data})
       
        return APIcountrie
    }


