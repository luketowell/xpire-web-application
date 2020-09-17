import {
    GET_CATEGORIES_PENDING,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAILED,
    GET_ITEMS_BY_CATEGORY_PENDING,
    GET_ITEMS_BY_CATEGORY_SUCCESS,
    GET_ITEMS_BY_CATEGORY_FAILED,
    SET_DATE,
} from '../actionTypes';
import request from '../../utils/request';
import displayCurrentStore from '../../utils/currentStore';

export const setDate = (date) => {
    return (dispatch) => {
        dispatch({
            type: SET_DATE,
            payload: date,
        });
    };
};

export const getCategories = () => {
    return (dispatch, getState) => {
        dispatch({
            type: GET_CATEGORIES_PENDING,
        });
        request('/itemcategory/all', 'GET')
            .then((response) => {
                dispatch({
                    type: GET_CATEGORIES_SUCCESS,
                    payload: response,
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_CATEGORIES_FAILED,
                    payload: error,
                });
            });
    };
};

export const getCategoryItems = (categoryId) => {
    return (dispatch, getState) => {
        let storeId = displayCurrentStore(getState().auth);
        let date = getState().categories.chosenDate;
        if (date === '') {
            date = new Date().toISOString().split('T')[0];
        }
        console.log(date);
        dispatch({
            type: GET_ITEMS_BY_CATEGORY_PENDING,
        });
        request(`/storeitemsummary/${storeId}/${categoryId}/${date}`, 'GET')
            .then((response) => {
                dispatch({
                    type: GET_ITEMS_BY_CATEGORY_SUCCESS,
                    payload: response,
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_ITEMS_BY_CATEGORY_FAILED,
                    payload: error,
                });
            });
    };
};
