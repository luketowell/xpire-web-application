import {
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_PENDING,
    GET_CATEGORIES_FAILED,
    GET_ITEMS_BY_CATEGORY_PENDING,
    GET_ITEMS_BY_CATEGORY_SUCCESS,
    GET_ITEMS_BY_CATEGORY_FAILED,
    FIND_ITEM_PENDING,
} from '../actionTypes';

const initialState = {
    categoryItems: [],
    categories: [],
    chosenCategory: {},
    categoryStatus: 'completed',
    categoryItemsStatus: '',
};

const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES_PENDING:
            return {
                ...state,
                categoryStatus: 'pending',
            };
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                categoryStatus: 'completed',
                categories: action.payload,
            };
        case GET_CATEGORIES_FAILED:
            return {
                ...state,
                categoryStatus: 'failed',
                error: action.payload.message,
            };
        case GET_ITEMS_BY_CATEGORY_PENDING:
            return {
                ...state,
                categoryItemsStatus: 'pending',
            };
        case GET_ITEMS_BY_CATEGORY_SUCCESS:
            return {
                ...state,
                categoryItemsStatus: 'completed',
                categoryItems: action.payload,
            };
        case GET_ITEMS_BY_CATEGORY_FAILED:
            return {
                ...state,
                categoryItemsStatus: 'failed',
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
