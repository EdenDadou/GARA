
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { LoginDeveloper, RegisterDeveloper, DeveloperInfo } from '../../services/Developer';
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

    if (localStorage.getItem('onProcess') === 'false') {
        localStorage.setItem('onProcess', true)
        try {


            //Call of API
            const loginUser = yield call(loginWithEmailPasswordAsync, email, password);
            console.log(loginUser)
            //If response 200
            if (loginUser.status === 200) {

                //create a "cookies" to stock token and UserID
                const UserID = loginUser.data.developerId;
                const Token = loginUser.data.token;

                localStorage.setItem('Token', Token)
                localStorage.setItem('UserID', UserID)

                yield put(loginUserSuccess(loginUser));
               

                //create a "cookie Allow" to keep connection to app
                localStorage.setItem('Allow', true)

                console.log(localStorage.getItem('UserID'))
                console.log(localStorage.getItem('Token'))
                DeveloperInfo(localStorage.getItem('Token'), localStorage.getItem('UserID'))
                    .then(res => {
                        if(res.data.currentWorkingCompany === null){
                            localStorage.setItem('CurrentWorkingCompany', null)
                            history.push('/app/welcomepage');
                        }else if(res.data.currentWorkingCompany.activated === false){
                            localStorage.setItem('CurrentWorkingCompany', null)
                            history.push('/app/company');
                        }else if(res.data.currentWorkingCompany.activated===true){
                            localStorage.setItem('CurrentWorkingCompany', true)
                            history.push('/app');
                        }})
                    .catch(error => console.log(error))

                localStorage.setItem('onProcess', false)
            }
            else {
                localStorage.setItem('Error', true);
                yield put(loginUserSuccess(loginUser));
                console.log('LOGIN failed :', loginUser);
                localStorage.setItem('onProcess', false);

            }
        } catch (error) {
            localStorage.setItem('Error', true);
            yield put(loginUserSuccess(error));
            console.log('login failed :', error);
            localStorage.setItem('onProcess', false);
        }
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
        localStorage.removeItem('CurrentWorkingCompany');

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