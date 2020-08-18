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
        default: {
            return {
                ...state
            }
        }
    }
}

export default ItemReducer