import {
    COMPANY_ADD_COMPANY,
    COMPANY_GET_LIST,
    COMPANY_GET_LIST_SUCCESS,
    COMPANY_GET_LIST_ERROR,
    COMPANY_ADD_ITEM_SUCCESS,
    COMPANY_ADD_ITEM_ERROR,
    COMPANY_SELECTED_ITEMS_CHANGE
} from '../actions';



export const getCompaniesList = (items) => ({
    type: COMPANY_GET_LIST,
    payload : items
});

export const getCompanyListSuccess = (items) => ({
    type: COMPANY_GET_LIST_SUCCESS,
    payload: items
});

export const getCompanyListError = (error) => ({
    type: COMPANY_GET_LIST_ERROR,
    payload: error
});

export const addCompany = (item) => ({
    type: COMPANY_ADD_COMPANY,
    payload: {item}
});

export const addCompanyItemSuccess = (items) => ({
    type: COMPANY_ADD_ITEM_SUCCESS,
    payload: items
});

export const addCompanyItemError = (error) => ({
    type: COMPANY_ADD_ITEM_ERROR,
    payload: error
});

export const selectedCompanyItemsChange = (selectedItems) => ({
    type: COMPANY_SELECTED_ITEMS_CHANGE,
    payload: selectedItems
});