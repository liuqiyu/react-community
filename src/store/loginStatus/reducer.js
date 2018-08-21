import * as loginStatus from './action-types';

const initialState = {
    loginStatus: false,
    userInfo: null,
};

const mainLogin = (state = initialState, action ) => {
    switch (action.type) {
        case loginStatus.LOGIN: {
            return {
                ...state,
                gunfire: action.payload,
            };
        }
        case loginStatus.LOGOUT: {
            return {
                ...state,
                gunfire: action.payload,
            };
        }
        default:
            break;
    }
};

export default mainLogin;