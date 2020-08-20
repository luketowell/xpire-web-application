import { combineReducers } from 'redux';
import AuthReducer from './auth';
import ItemReducer from './item';

const appReducers = combineReducers({
    auth: AuthReducer,
    items: ItemReducer,
});

export default appReducers;
