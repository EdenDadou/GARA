import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_FAIL
} from '../actions';


export const loginUser = (user, history) => ({
  type: LOGIN_USER,
  payload: { user, history }
});

export const loginUserSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  payload: user
});

export const loginUserFail = (loginUser) => ({
  type: LOGIN_USER_FAIL,
  payload: loginUser
});


export const registerUser = (developer, history) => ({
  type: REGISTER_USER,
  payload:  {developer, history}
})
export const registerUserSuccess = (developer) => ({
  type: REGISTER_USER_SUCCESS,
  payload: developer
})

export const logoutUser = (history) => ({
  type: LOGOUT_USER,
  payload : {history}
});