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


export const GetAllCompanies = (token) => {
  let config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }
  const PromiseResponse = axios.get(GET_ROOT_URL + 'secure/listcompanies/',config)
  return PromiseResponse
}


export const UpdateCurrentCompany = (token, id) => {
  let config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }
  const PromiseResponse = axios.get(GET_ROOT_URL + 'secure/developer/updatecompany/'+ id ,config)
  return PromiseResponse
}


export const DeleteCompany = (token, id) => {
  let config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }
  const PromiseResponse = axios.get(GET_ROOT_URL + 'secure/company/desactivate/'+ id ,config)
  return PromiseResponse
}

export const GetCompanyById = (token, id) => {
  let config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }
  const PromiseResponse = axios.get(GET_ROOT_URL + 'secure/company/'+ id ,config)
  return PromiseResponse
}

export const SaveChangedCompany = (token, id, data) => {
  let config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }
  const PromiseResponse = axios.put(GET_ROOT_URL + 'secure/company/'+ id, data ,config)
  return PromiseResponse
}


<<<<<<< HEAD
export const UpdateCurrentCompany = (token, id) => {
  let config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }
  const PromiseResponse = axios.get(GET_ROOT_URL + 'secure/developer/updatecompany/'+ id ,config)
  return PromiseResponse
}


export const DeleteCompany = (token, id) => {
  let config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }
  const PromiseResponse = axios.get(GET_ROOT_URL + 'secure/company/desactivate/'+ id ,config)
  return PromiseResponse
}

export const GetCompanyById = (token, id) => {
  let config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }
  const PromiseResponse = axios.get(GET_ROOT_URL + 'secure/company/'+ id ,config)
  return PromiseResponse
}

export const SaveChangedCompany = (token, id, data) => {
  let config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }
  const PromiseResponse = axios.put(GET_ROOT_URL + 'secure/company/'+ id, data ,config)
  return PromiseResponse
}




=======
>>>>>>> register



