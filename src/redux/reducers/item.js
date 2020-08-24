import {
    FIND_ITEM_PENDING,
    GET_STORE_ITEMS_BY_ID_PENDING,
    GET_STORE_ITEMS_BY_ID_SUCCESS,
    GET_STORE_ITEMS_BY_ID_FAILURE,
    GET_STATUS_FAILED,
    GET_STATUS_SUCCESS,
    GET_STATUS_PENDING,
} from '../actionTypes';

const initialState = {
    selectedStoreItem: false,
    storeItemStatus: '',
    storeItemDetails: {},
    statusOptions: [],
    statusStatus: '',
    error: '',
};

const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STORE_ITEMS_BY_ID_PENDING:
            return {
                ...state,
                storeItemStatus: 'pending',
            };
        case GET_STORE_ITEMS_BY_ID_SUCCESS:
            return {
                ...state,
                selectedStoreItem: false,
                storeItemStatus: 'completed',
                storeItemDetails: action.payload,
            };
        case GET_STORE_ITEMS_BY_ID_FAILURE:
            return {
                ...state,
                storeItemStatus: 'failed',
                error: action.payload.message,
            };
        case FIND_ITEM_PENDING:
            return {
                ...state,
                selectedStoreItem: action.payload,
            };
        case GET_STATUS_FAILED:
            return {
                ...state,
                statusStatus: 'failed',
                error: action.payload.massage,
            };
        case GET_STATUS_SUCCESS:
            return {
                ...state,
                statusStatus: 'complete',
                statusOptions: action.payload,
            };
        case GET_STATUS_PENDING:
            return {
                ...state,
                statusStatus: 'pending',
            };
        default: {
            return {
                ...state,
            };
        }
    }
};

export default CategoryReducer;
