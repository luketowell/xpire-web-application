import { createStore } from 'redux';

import appReducers from './reducers/appReducers';

const Store = createStore(appReducers);

export default Store;