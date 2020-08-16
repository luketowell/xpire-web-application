const { USER_AUTH } = require("../constants")

const initialState = {
    userAuthed : false
}

const AuthReducer = (state = initialState, action) => {
    switch(action.type){
        case USER_AUTH: 
            return {
                ...state,
                userAuthed:true
            }
        default: {
            return {
                ...state
            }
        }
    }
} 

export default AuthReducer