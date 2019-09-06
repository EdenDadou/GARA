
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { LoginDeveloper, RegisterDeveloper } from '../../services/Developer';
import {
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER
} from '../actions';

import {
    loginUserSuccess,
    registerUserSuccess,
    loginUserFail
} from './actions';


//--------------Login User function

const loginWithEmailPasswordAsync = async (email, password) =>
    await LoginDeveloper(email, password)
        .then(authUser => authUser)
        .catch(error => error);

function* loginWithEmailPassword({ payload }) {
    const { email, password } = payload.user;
    const { history } = payload;
    try {
        const loginUser = yield call(loginWithEmailPasswordAsync, email, password);
        if (loginUser.status === 200) {
            localStorage.setItem('token', loginUser.data)
            yield put(loginUserSuccess(loginUser));
            history.push('/app');
        } else {
            console.log('login failed :', loginUser)
            yield put(loginUserFail(loginUser));
        }
    } catch (error) {
        console.log('login error : ', error)
    }
}


//---------------register User function

const registerWithEmailPasswordAsync = async (developer) =>
    await RegisterDeveloper(developer)
        .then(authUser => authUser)
        .catch(error => error);

function* registerWithEmailPassword({ payload }) {
    const developer = payload.developer;
    const { history } = payload
    try {
        const registerUser = yield call(registerWithEmailPasswordAsync, developer);
        if (registerUser.status === 200) {
            yield put(registerUserSuccess(registerUser.data));
            history.push('/app')
        } else if (registerUser.status !== 200){
            console.log('register failed :', registerUser)
        }
    } catch (error) {
        console.log('register error : ', error)
    }
}


//-------------------Logout User function

const logoutAsync = async (history) => {
    history.push('/user/login')
}

function* logout({ payload }) {
    const { history } = payload
    try {
        yield call(logoutAsync, history);
        localStorage.removeItem('Allow');
    } catch (error) {
    }
}



export function* watchRegisterUser() {
    yield takeEvery(REGISTER_USER, registerWithEmailPassword);
}

export function* watchLoginUser() {
    yield takeEvery(LOGIN_USER, loginWithEmailPassword);
}

export function* watchLogoutUser() {
    yield takeEvery(LOGOUT_USER, logout);
}


export default function* rootSaga() {
    yield all([
        fork(watchLoginUser),
        fork(watchLogoutUser),
        fork(watchRegisterUser)
    ]);
}