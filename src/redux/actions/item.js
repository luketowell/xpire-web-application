import {
    FIND_ITEM_PENDING,
    GET_STORE_ITEMS_BY_ID_PENDING,
    GET_STORE_ITEMS_BY_ID_SUCCESS,
    GET_STORE_ITEMS_BY_ID_FAILURE,
    GET_STATUS_FAILED,
    GET_STATUS_SUCCESS,
    GET_STATUS_PENDING,
} from '../actionTypes';
import request from '../../utils/request';
import displayCurrentStore from '../../utils/currentStore';

export const findProductInformation = (ItemNumber) => {
    return {
        type: FIND_ITEM_PENDING,
        payload: ItemNumber,
    };
};

export const getStoreItemById = (id) => {
    return (dispatch, getState) => {
        dispatch({
            type: GET_STORE_ITEMS_BY_ID_PENDING,
        });
        request(`/storeitem/id/${id}`, 'GET')
            .then((response) => {
                dispatch({
                    type: GET_STORE_ITEMS_BY_ID_SUCCESS,
                    payload: response,
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_STORE_ITEMS_BY_ID_FAILURE,
                    payload: error,
                });
            });
    };
};

export const getStatus = (id) => {
    return (dispatch, getState) => {
        dispatch({
            type: GET_STATUS_PENDING,
        });
        request(`/status/all`, 'GET')
            .then((response) => {
                dispatch({
                    type: GET_STATUS_SUCCESS,
                    payload: response,
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_STATUS_FAILED,
                    payload: error,
                });
            });
    };
};
