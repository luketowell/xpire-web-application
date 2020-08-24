import {
    FIND_ITEM_PENDING,
    GET_STORE_ITEMS_BY_ID_PENDING,
    GET_STORE_ITEMS_BY_ID_SUCCESS,
    GET_STORE_ITEMS_BY_ID_FAILURE,
} from '../actionTypes';

const initialState = {
    selectedItem: '',
    storeItemStatus: '',
    storeItemDetails: {},
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
                selectedItem: action.payload,
            };
        default: {
            return {
                ...state,
            };
        }
    }
};

export default CategoryReducer;
