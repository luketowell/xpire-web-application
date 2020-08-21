import { combineReducers } from 'redux';
import AuthReducer from './auth';
import ItemReducer from './item';
import CategoryReducer from './category';

const appReducers = combineReducers({
    auth: AuthReducer,
    items: ItemReducer,
    categories: CategoryReducer,
});

export default appReducers;
