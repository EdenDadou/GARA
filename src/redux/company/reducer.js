import {
    COMPANY_ADD_COMPANY,
    COMPANY_ADD_ITEM_SUCCESS,
    COMPANY_GET_LIST,
    COMPANY_SELECTED_ITEMS_CHANGE,
    COMPANY_CHANGE_ITEM_SUCCESS,
    COMPANY_CHANGE_ITEM,
} from '../actions';

const INIT_STATE = {
    item: null,
    loading: false,
    allCompanyItems: [],
    selectedItems: []

};


export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case COMPANY_ADD_COMPANY:
            return { ...state, loading: true };
        case COMPANY_ADD_ITEM_SUCCESS:
            return { ...state, loading: false, item: action.payload, allCompanyItems: state.allCompanyItems.concat(action.payload) };
        case COMPANY_CHANGE_ITEM:
            return { ...state, loading: true, item: action.payload};
        case COMPANY_CHANGE_ITEM_SUCCESS:
            return { ...state, loading: false, item: action.payload};
        case COMPANY_GET_LIST:
            return { ...state, loading: false, allCompanyItems: action.payload }
        case COMPANY_SELECTED_ITEMS_CHANGE:
            return { ...state, loading: false, selectedItems: action.payload };
        default: return { ...state };
    }
}

