
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { LoginDeveloper, RegisterDeveloper, DeveloperInfo } from '../../services/Developer';
import {
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER
} from '../actions';

import {
    loginUserSuccess,
    registerUserSuccess
} from './actions';


//--------------Login User function-------------------//


//fonction to call API for login user
const loginWithEmailPasswordAsync = async (email, password) =>
    await LoginDeveloper(email, password)
        .then(authUser => authUser)
        .catch(error => error);

//fonction to call API to get info user
const DeveloperInfoAsync = async (token, id) =>
    await DeveloperInfo(token, id)
        .then(authUser => authUser)
        .catch(error => error);


function* loginWithEmailPassword({ payload }) {
    const { email, password } = payload.user;
    const { history } = payload;

    if (localStorage.getItem('onProcess') === 'false') {
        localStorage.setItem('onProcess', true)
        try {
            localStorage.setItem('Error', null);

            //Call of API
            const loginUser = yield call(loginWithEmailPasswordAsync, email, password);
            //If response 200
            if (loginUser.status === 200) {
                console.log(loginUser)
                
                //create a "cookies" to stock token, phoneNumber and UserID
                const UserID = loginUser.data.developerId;
                const Token = loginUser.data.token;
                const PhoneNumber = loginUser.data.phoneNumber
                

                localStorage.setItem('Token', Token)
                localStorage.setItem('UserID', UserID)
                localStorage.setItem('PhoneNumber', PhoneNumber)

                yield put(loginUserSuccess(loginUser, true));


                // console.log(localStorage.getItem('UserID'))
                // console.log(localStorage.getItem('Token'))
                const infoUser = yield call(DeveloperInfoAsync, Token, UserID);

                if (infoUser.status === 200) {
                    //create a "cookie Allow" to keep connection to app
                    localStorage.setItem('onProcess', false)
                    
                    if (infoUser.data.currentWorkingCompany === null) {
                        localStorage.setItem('CurrentWorkingCompany', null);
                        localStorage.setItem('Allow', true);
                        window.location.reload()
                        // this.props.history.push('/app/welcomepage');
                    } else if (infoUser.data.currentWorkingCompany.activated === false) {
                        localStorage.setItem('CurrentWorkingCompany', false);
                        localStorage.setItem('Allow', true);
                        window.location.reload()
                        // this.props.history.push('/app/company');
                    } else if (infoUser.data.currentWorkingCompany.activated === true) {
                        localStorage.setItem('CurrentWorkingCompany', true);
                        localStorage.setItem('Allow', true);
                        window.location.reload()
                        // this.props.history.push('/app');
                    }
                }

            } else{
                console.log('LOGIN failed :', loginUser);
                yield put(loginUserSuccess('Error', false));

            }
        } catch (error) {
            console.log('login failed :', error);
            yield put(loginUserSuccess('Error', false));
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
    if (localStorage.getItem('onProcess') === 'false') {
        localStorage.setItem('onProcess', true)
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
            yield put(registerUserSuccess('Error'));
        }
    } catch (error) {
        console.log('register error : ', error)
        yield put(registerUserSuccess('Error'));
    }
}
}


//-------------------Logout User function-----------------//

const logoutAsync = async (history) => {


    //redirect to login page
    window.location.reload()
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