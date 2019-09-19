import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    LOGOUT_USER,
    LOGIN_USER_FAIL,
    REGISTER_USER_FAIL
} from '../actions';

const INIT_STATE = {
    user: localStorage.getItem('user_id'),
    loading: false
};


export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loading: true };
        case LOGIN_USER_SUCCESS:
            return { ...state, loading: false, user: action.payload, allow : action.payload };
        case LOGIN_USER_FAIL:
            return { ...state, loading: false };
        case REGISTER_USER:
            return { ...state, loading: true };
        case REGISTER_USER_SUCCESS:
            return { ...state, loading: false, user: action.payload };
        case REGISTER_USER_FAIL:
            return { ...state, loading: false };
        case LOGOUT_USER:
            return { ...state ,user:null, allow : action.payload};
        default: return { ...state };
    }
}

