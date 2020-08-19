import { GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_PENDING,
    GET_CATEGORIES_FAILED,
    GET_ITEMS_BY_CATEGORY_PENDING,
    GET_ITEMS_BY_CATEGORY_SUCCESS,
    GET_ITEMS_BY_CATEGORY_FAILED } from '../actionTypes';

const initialState = {
    categoryItems: [],
    categories:[],
    status:[],
    individualAction:{},
    addedAction:{},
    chosenCategory: {},
    categoryStatus: "completed",
    categoryItemsStatus: "completed"
}

const ItemReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_CATEGORIES_PENDING:
            return {
                ...state,
                categoryStatus: "pending",
            }
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                categoryStatus: "completed",
                categories: action.payload
            }
        case GET_CATEGORIES_FAILED:
            return {
                ...state,
                categoryStatus: "failed",
                error: action.payload.message
            }
        case GET_ITEMS_BY_CATEGORY_PENDING:
            return{
                ...state,
                categoryItemsStatus:"pending"
            }
        case GET_ITEMS_BY_CATEGORY_SUCCESS:
            return{
                ...state,
                categoryItemsStatus: "completed",
                categoryItems: action.payload
            }
        case GET_ITEMS_BY_CATEGORY_FAILED:
            return{
                ...state,
                categoryItemsStatus: "failed",
                error: action.payload.message
            }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default ItemReducer