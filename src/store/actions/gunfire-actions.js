/**
 * gunfire-actions
 * create by lqy 2018/7/5
 */

export const GET_ARMS = 'GET_ARMS';
export const getArms = data => {
  return {
    type: GET_ARMS,
    payload: data,
  };
};