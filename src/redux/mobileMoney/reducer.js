import {
    MOBILE_MONEY_PAID, MOBILE_MONEY_PAID_SUCESS, MOBILE_MONEY_PAID_FAIL
} from '../actions';

const INIT_STATE = {
    payment: null,
    paymentloading: false
};


export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case MOBILE_MONEY_PAID:
            return { ...state, paymentloading: true };
        case MOBILE_MONEY_PAID_SUCESS:
            return { ...state, paymentloading: false, payment: action.payload };
        case MOBILE_MONEY_PAID_FAIL:
            return { ...state, paymentloading: false };
        default: return { ...state };
    }
}

