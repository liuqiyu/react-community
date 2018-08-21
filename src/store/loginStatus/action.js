import * as loginStatus from './action-types';

export const login = data => {
    return {
        type: loginStatus.LOGIN,
        payload: data,
    };
};

export const logout = () => {
    return {
        type: loginStatus.LOGOUT,
    }
};