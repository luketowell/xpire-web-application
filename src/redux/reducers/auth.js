const { USER_AUTH,
    GET_STORES_PENDING,
    GET_STORES_SUCCESS,
    GET_STORES_FAILED } = require("../actionTypes")

const initialState = {
    userAuthed : false,
    storesStatus: "complete",
    stores: [],
    error: ""
}

const AuthReducer = (state = initialState, action) => {
    switch(action.type){
        case USER_AUTH: 
            return {
                ...state,
                userAuthed:true
            }
        case GET_STORES_PENDING:
            return{
                ...state,
                storesStatus: "pending"
            }
        case GET_STORES_SUCCESS:
            return {
                ...state,
                storesStatus: "complete",
                stores: action.payload
            }
        case GET_STORES_FAILED:
            console.log(action.payload.message)
            return {
                ...state,
                storesStatus: "complete",
                error: action.payload.message
            }
        default: {
            return {
                ...state
            }
        }
    }
} 

export default AuthReducer