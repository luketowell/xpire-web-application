import {
    GET_CATEGORIES_PENDING,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAILED,
    GET_ITEMS_BY_CATEGORY_PENDING,
    GET_ITEMS_BY_CATEGORY_SUCCESS,
    GET_ITEMS_BY_CATEGORY_FAILED,
    FIND_ITEM_PENDING,
} from '../actionTypes';
import request from '../../utils/request';
import displayCurrentStore from '../../utils/currentStore';

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
        dispatch({
            type: GET_ITEMS_BY_CATEGORY_PENDING,
        });
        request(`/storeitemsummary/${storeId}/${categoryId}`, 'GET')
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
