import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL
} from '../actions';


export const loginUser = (user, history) => ({
  type: LOGIN_USER,
  payload: { user, history }
});

export const loginUserSuccess = (user, allow) => ({
  type: LOGIN_USER_SUCCESS,
  payload: user, allow
});
export const loginUserFail = (user) => ({
  type: LOGIN_USER_FAIL,
  payload: user 
});

export const registerUser = (developer, history) => ({
  type: REGISTER_USER,
  payload:  {developer, history}
})
export const registerUserSuccess = (developer) => ({
  type: REGISTER_USER_SUCCESS,
  payload: developer
})

export const registerUserFail = (registerUser) => ({
  type: REGISTER_USER_FAIL,
  payload: registerUser
});

export const logoutUser = (history) => ({
  type: LOGOUT_USER,
  payload : {history}
});