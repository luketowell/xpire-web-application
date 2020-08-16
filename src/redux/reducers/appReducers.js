import { combineReducers } from 'redux';
import AuthReducer from './auth';

const appReducers = combineReducers({
    auth: AuthReducer
})

export default appReducers