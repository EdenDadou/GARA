
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { PaidMobileMoney } from '../../services/MobileMoney';
import {
    MOBILE_MONEY_PAID, MOBILE_MONEY_PAID_SUCESS, MOBILE_MONEY_PAID_FAIL
} from '../actions';

import {
    MobileMoneyPaidSucess,
    MobileMoneyPaidFail
} from './actions';


//--------------Mobile money Paid fonction-------------------//


//fonction to call API for paiment
const MobileMoneyPaymentAsync = async (token, paymentInfo) =>{
   return await PaidMobileMoney(token, paymentInfo)
        .then(resultPayment => resultPayment)
        .catch(error => error)
    };



function* PaymentMobileMoney({ payload }) {
    if (localStorage.getItem('onProcess') === 'false') {
        localStorage.setItem('onProcess', true)
        const payment = payload.payment;
        const token = localStorage.getItem('Token')
        console.log(payment)
        console.log(token)

        try {
            //Call of API
            const resultPayment = yield call (MobileMoneyPaymentAsync, token, payment);
          console.log(resultPayment)
            if(resultPayment.status ===200){
                yield put(MobileMoneyPaidSucess(resultPayment));
            }else {
                yield put(MobileMoneyPaidSucess('error'));
            }
         
          
            
        } catch (error) {
            yield put(MobileMoneyPaidSucess('error'));
        }
    }
}

//----------------------watchers-----------------------//
//look after Redux action, and react in fonction.
export function* watchMobileMoney() {
    yield takeEvery(MOBILE_MONEY_PAID, PaymentMobileMoney);
}


//make link between watcher and saga
export default function* rootSaga() {
       yield fork(watchMobileMoney);
}