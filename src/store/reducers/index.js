/**
 * index
 * create by lqy 2018/6/30
 */
import { combineReducers } from 'redux';
import productsReducer from './products-reducer';
import cartReducer from './cart-reducer';
import gunfireReducer from './gunfire-reducer';

const allReducers = {
  productsReducer,
  cartReducer,
  gunfireReducer,
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;