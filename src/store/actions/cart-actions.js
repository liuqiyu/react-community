// 购物车操作

/**
 * 加入购物车
 * @type {string}
 */
export const ADD_TO_CART = 'ADD_TO_CART';
export const addToCart = (name, num, price) => {
  return {
    type: ADD_TO_CART,
    payload: {
      name,
      num,
      price,
    },
  };
};

/**
 * 删除购物车
 * @type {string}
 */
export const DELETE_CART = 'DELETE_CART';
export const deleteCart = (name) => {
  return {
    type: DELETE_CART,
    payload: {
      name,
    },
  };
};

/**
 * 更新购物车
 * @type {string}
 */
export const UPDATE_CART = 'UPDATE_CART';
export const updateCart = (name, num, price) => {
  return {
    type: UPDATE_CART,
    payload: {
      name,
      num,
      price,
    },
  };
};