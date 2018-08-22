/**
 * store
 * create by lqy 2018/6/30
 */

import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import loginStatusReducer from './loginStatus/reducer';

// const rootReducer = combineReducers(loginStatusReducer);

let store = createStore(
    loginStatusReducer,
    composeWithDevTools());

export default store;