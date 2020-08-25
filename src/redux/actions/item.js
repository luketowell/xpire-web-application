import {
    FIND_ITEM_PENDING,
    GET_STORE_ITEMS_BY_ID_PENDING,
    GET_STORE_ITEMS_BY_ID_SUCCESS,
    GET_STORE_ITEMS_BY_ID_FAILURE,
    GET_STATUS_FAILED,
    GET_STATUS_SUCCESS,
    GET_STATUS_PENDING,
    POST_ACTION_PENDING,
    POST_ACTION_FAILED,
    POST_ACTION_SUCCESS,
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

export const postNewAction = (action) => {
    return (dispatch, getState) => {
        const state = getState();
        let data = action;
        data.user_id = state.auth.user.userName;
        data.store_item_id = state.items.storeItemDetails.id;
        dispatch({
            type: POST_ACTION_PENDING,
        });
        request(`/actions/new`, 'post', data)
            .then((response) => {
                dispatch({
                    type: POST_ACTION_SUCCESS,
                    payload: response,
                });
            })
            .catch((error) => {
                dispatch({
                    type: POST_ACTION_FAILED,
                    payload: error,
                });
            });
    };
};
