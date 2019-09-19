import {
  MOBILE_MONEY_PAID, MOBILE_MONEY_PAID_SUCESS, MOBILE_MONEY_PAID_FAIL
} from '../actions';


export const MobileMoneyPaid = (payment) => ({
  type: MOBILE_MONEY_PAID,
  payload: { payment}
});

export const MobileMoneyPaidSucess = (payment) => ({
  type: MOBILE_MONEY_PAID_SUCESS,
  payload: payment
});

export const MobileMoneyPaidFail = (paymentError) => ({
  type: MOBILE_MONEY_PAID_FAIL,
  payload:  paymentError
})
