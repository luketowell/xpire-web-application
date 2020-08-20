import user from '../../assets/mocks/user';

const {
    USER_AUTH,
    GET_STORES_PENDING,
    GET_STORES_SUCCESS,
    GET_STORES_FAILED,
    SET_CHOSEN_STORE,
} = require('../actionTypes');

const initialState = {
    userAuthed: false,
    storesStatus: 'complete',
    stores: [],
    error: '',
    user: {},
    chosenStore: false,
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_AUTH:
            return {
                ...state,
                userAuthed: true,
                user: user,
            };
        case GET_STORES_PENDING:
            return {
                ...state,
                storesStatus: 'pending',
            };
        case GET_STORES_SUCCESS:
            return {
                ...state,
                storesStatus: 'completed',
                stores: action.payload,
            };
        case GET_STORES_FAILED:
            return {
                ...state,
                storesStatus: 'failed',
                error: action.payload.message,
            };
        case SET_CHOSEN_STORE:
            return {
                ...state,
                chosenStore: action.payload,
            };
        default: {
            return {
                ...state,
            };
        }
    }
};

export default AuthReducer;
