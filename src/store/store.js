/**
 * store
 * create by lqy 2018/6/30
 */

import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import loginStatusReducer from './loginStatus/reducer';

let store = createStore(
    combineReducers({...loginStatusReducer}),
    composeWithDevTools());

export default store;