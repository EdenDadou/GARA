import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { getDateWithFormat } from "../../helpers/Utils";
import { RegisterCompany } from '../../services/Company';

import {
  COMPANY_ADD_COMPANY
} from "../actions";

import {
  addCompanyItemSuccess
} from "./actions";



const postCompany = (token, company) => {
  RegisterCompany(token, company)
    .then(companyAdded => companyAdded)
    .catch(error => error);
};

function* registerDeveloperCompany({ payload }) {
  const token = localStorage.getItem('Token');
  const company = payload;

  try {
    const addCompany = yield call(postCompany, token, company);
    console.log(addCompany)

    if (addCompany.status === 200) {
      console.log(addCompany)

      yield put(addCompanyItemSuccess(addCompany));
    }
  } catch (error) {
    console.log(error)
  }
}


export function* watchAddCompany() {
  yield takeEvery(COMPANY_ADD_COMPANY, registerDeveloperCompany);
}

export default function* rootSaga() {
  yield all([fork(watchAddCompany)]);
}
