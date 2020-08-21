import { FIND_ITEM_PENDING } from '../actionTypes';

const initialState = {
    selectedItem: '',
};

const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
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
