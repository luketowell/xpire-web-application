import { createStore, applyMiddleware } from 'redux';
import appReducers from './reducers/appReducers';
import thunk from 'redux-thunk';

const Store = createStore(appReducers, applyMiddleware(thunk) );

export default Store;