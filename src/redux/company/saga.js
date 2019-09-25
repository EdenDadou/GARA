import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { RegisterCompany, GetAllCompanies, SaveChangedCompany } from '../../services/Company';

import {
  COMPANY_ADD_COMPANY,
  COMPANY_GET_LIST,
  COMPANY_CHANGE_ITEM
} from "../actions";

import {
  addCompanyItemSuccess,
  CompanyItemsChangeSucess,
  getCompaniesList
} from "./actions";


//----------ADD COMPANY--------//

const postCompany = async (token, company) => {
  return await RegisterCompany(token, company)
    .then(addcompany => addcompany )
    .catch(error => error);
};

function* registerDeveloperCompany({ payload }) {

  if (localStorage.getItem('onProcess') === 'false') {
    localStorage.setItem('onProcess', true)
    const token = localStorage.getItem('Token');
    const company = payload.item;

    try {
      const addCompany = yield call(postCompany, token, company);
      if (addCompany.status === 200) {
        console.log(addCompany)
        localStorage.setItem('companyAdded', true)
        yield put(addCompanyItemSuccess(addCompany.data));

      } else {
        localStorage.setItem('companyAdded', false)
        yield put(addCompanyItemSuccess('Error'));
      }
    } catch (error) {
      localStorage.setItem('companyAdded', false)
      yield put(addCompanyItemSuccess('Error'));
      console.log(error)
    }
  }
}



//-----------GET LIST OF COMPANY---------//

const getCompanies = async (token) =>{
  return await  GetAllCompanies(token)
  .then(res => res)
  .catch(err => {console.log(err)})
}

function* CompanyList() {

  if (localStorage.getItem('onProcess') === 'false') {
    localStorage.setItem('onProcess', true)
    const token = localStorage.getItem('Token')

    try {
      const allCompanies = yield call(getCompanies, token);
      if (allCompanies.status === 200) {
        localStorage.setItem('AllCompanies', allCompanies.data)
        yield put(getCompaniesList(allCompanies.data));

      } else {
        yield put(getCompaniesList('Error'));
      }
    } catch (error) {
      yield put(getCompaniesList('Error'));
      console.log(error)
    }
  }
}

//------------EDIT COMPANY--------------//


const ChangeCompanyValues = async (token, IDCompany, changedCompanyItem) =>{
  return await  SaveChangedCompany(token, IDCompany, changedCompanyItem)
  .then(res => res)
  .catch(err => err)
}

function* EditCompany({ payload }) {

  if (localStorage.getItem('onProcess') === 'false') {
    localStorage.setItem('onProcess', true)
    let token = localStorage.getItem('Token')
    let IDCompany = localStorage.getItem('IDCompanyToEdit')
    const changedCompanyItem = payload
    try {
  
      const changedCompany = yield call(ChangeCompanyValues, token, IDCompany, changedCompanyItem);
      console.log(changedCompany)
      if (changedCompany.status === 200) {
        yield put(CompanyItemsChangeSucess(changedCompany));
      } else {
        yield put(CompanyItemsChangeSucess('Error'));
      }
    } catch (error) {
      yield put(CompanyItemsChangeSucess('Error'));
      console.log(error)
    }
  }
}

export function* watchAddCompany() {
  yield takeEvery(COMPANY_ADD_COMPANY, registerDeveloperCompany);
}

export function* watchCompanyList() {
  yield takeEvery(COMPANY_GET_LIST, CompanyList);
}

export function* watchChangedCompany() {
  yield takeEvery(COMPANY_CHANGE_ITEM, EditCompany);
}

export default function* rootSaga() {
  yield all([
    fork(watchAddCompany),
    fork(watchCompanyList),
    fork(watchChangedCompany)
  ]);
}
