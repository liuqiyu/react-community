import * as loginStatus from './action-types';

const initialState = {
    loginStatus: false,
    userInfo: {},
};

const mainLogin = (state = initialState, action ) => {
    switch (action.type) {
        case loginStatus.LOGIN: {
            // 登录
            return {
                ...state,
                loginStatus: true,
                userInfo: action.payload,
            };
        }
        case loginStatus.LOGOUT: {
            // 注销
            return {
                ...state,
                loginStatus: false,
            };
        }
        case loginStatus.GET_LOGIN_STATUS: {
            // 判断登录状态
            const userInfo = JSON.parse(window.localStorage.getItem('userInfo'));
            return {
                ...state,
                loginStatus: userInfo ? true : false,
                userInfo: userInfo ? userInfo : {},
            };
        }
        default:
            return state;
    }
};

export default mainLogin;