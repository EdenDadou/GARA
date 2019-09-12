import {
    COMPANY_ADD_COMPANY,
    COMPANY_ADD_ITEM_SUCCESS,
} from '../actions';

const INIT_STATE = {
    item: localStorage.getItem('user_id'),
    loading: false
};


export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case COMPANY_ADD_COMPANY:
            return { ...state, loading: true };
        case COMPANY_ADD_ITEM_SUCCESS:
            return { ...state, loading: false, item: action.payload };
        default: return { ...state };
    }
}

