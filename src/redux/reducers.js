import { combineReducers } from 'redux';
import settings from './settings/reducer';
import menu from './menu/reducer';
import authUser from './auth/reducer';
import companyList from './company/reducer';
import todoApp from './todo/reducer';
import chatApp from './chat/reducer';
import mobileMoney from './mobileMoney/reducer';
import surveyListApp from './surveyList/reducer';
import surveyDetailApp from './surveyDetail/reducer';

const reducers = combineReducers({
  menu,
  settings,
  authUser,
  mobileMoney,
  companyList,
  todoApp,
  chatApp,
  surveyListApp,
  surveyDetailApp
});

export default reducers;