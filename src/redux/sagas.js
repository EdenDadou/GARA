import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import companySagas from './company/saga';
import todoSagas from './todo/saga';
import chatSagas from './chat/saga';
import surveyListSagas from './surveyList/saga';
import surveyDetailSagas from './surveyDetail/saga';

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    companySagas(),
    todoSagas(),
    chatSagas(),
    surveyListSagas(),
    surveyDetailSagas()
  ]);
}
