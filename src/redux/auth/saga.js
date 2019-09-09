
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
    loginUserFail, registerUserFail
} from './actions';


//--------------Login User function-------------------//


//fonction to call API for login user
const loginWithEmailPasswordAsync = async (email, password) =>
    await LoginDeveloper(email, password)
        .then(authUser => authUser)
        .catch(error => error);


function* loginWithEmailPassword({ payload }) {
    const { email, password } = payload.user;
    const { history } = payload;
    try {

        //Call of API
        const loginUser = yield call(loginWithEmailPasswordAsync, email, password);

        //If response 200
        if (loginUser.status === 200) {

            //create a "cookies" to stock token
            localStorage.setItem('token', loginUser.data)
            yield put(loginUserSuccess(loginUser));
            //create a "cookie Allow" to keep connection to app
            localStorage.setItem('Allow', true)

            //redirect to app
            history.push('/app');

        }
        else {
            localStorage.setItem('Error', true);
            yield put(loginUserSuccess(loginUser));
            console.log('LOGIN failed :', loginUser);
        
        }
    } catch (error) {
        localStorage.setItem('Error', true);
        yield put(loginUserSuccess(error));
        console.log('login failed :', error)
    }
}


//---------------register User function---------------//


//fonction to call API for login user
const registerWithEmailPasswordAsync = async (developer) =>
    await RegisterDeveloper(developer)
        .then(authUser => authUser)
        .catch(error => error);

function* registerWithEmailPassword({ payload }) {
    const developer = payload.developer;
    const { history } = payload
    try {

        //Call of API
        const registerUser = yield call(registerWithEmailPasswordAsync, developer);

        //If response 200
        if (registerUser.status === 200) {
            yield put(registerUserSuccess(registerUser.data));

            //Allow connection to app
            localStorage.setItem('Allow', true)

            //redirect to app
            history.push('/app')
        } else if (registerUser.status !== 200) {
            console.log('register failed :', registerUser)
            yield put(registerUserFail(registerUser));
        }
    } catch (error) {
        console.log('register error : ', error)
        yield put(registerUserFail(error));
    }
}


//-------------------Logout User function-----------------//

const logoutAsync = async (history) => {


    //redirect to login page
    history.push('/user/login')
}

function* logout({ payload }) {
    const { history } = payload
    try {
        //delete token, and authorization
        localStorage.removeItem('Allow');
        localStorage.removeItem('token');

        yield call(logoutAsync, history);

    } catch (error) {
    }
}


//----------------------watchers-----------------------//
//look after Redux action, and react in fonction.
export function* watchRegisterUser() {
    yield takeEvery(REGISTER_USER, registerWithEmailPassword);
}

export function* watchLoginUser() {
    yield takeEvery(LOGIN_USER, loginWithEmailPassword);
}

export function* watchLogoutUser() {
    yield takeEvery(LOGOUT_USER, logout);
}



//make link between watcher and saga
export default function* rootSaga() {
    yield all([
        fork(watchLoginUser),
        fork(watchLogoutUser),
        fork(watchRegisterUser)
    ]);

}