import { GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_PENDING,
    GET_CATEGORIES_FAILED } from '../actionTypes';

const initialState = {
    items: [],
    categories:[],
    status:[],
    individualAction:{},
    addedAction:{},
    chosenCategory: {},
    categoryStatus: "completed"
}

const ItemReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_CATEGORIES_PENDING:
            return {
                ...state,
                categoriesStatus: "pending",
            }
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                categoriesStatus: "completed",
                categories: action.payload
            }
        case GET_CATEGORIES_FAILED:
            return {
                ...state,
                categoriesStatus: "failed",
                error: action.payload.message
            }
        default: {
            return {
                ...state
            }
        }
    }
}

export default ItemReducer