/**
 * cart-reducer
 * create by lqy 2018/6/30
 */
import { ADD_TO_CART, DELETE_CART, UPDATE_CART } from '../actions/cart-actions'

const initState = {
  cart :[
    {
      name: '香蕉',
      num: 12,
      price: 5
    },
    {
      name: '苹果',
      num: 50,
      price: 3
    },
  ]
}

export default function(state = initState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [
          ...state.cart,
          action.payload,
        ],
      };
    }
    case DELETE_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.name !== action.payload.name)
      }
    }
    case UPDATE_CART: {
      return {
        ...state,
        cart: state.cart.map((item) => item.name === action.payload.name ? action.payload : item),
      }
    }
    default:
      return state;
  }
}