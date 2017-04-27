import * as types from "../actions/connectionTypes";
import connectionUtil from "../utils/connection";

const connectUtil = new connectionUtil();

const initialSate = {
    login: "",
    password: "",
    isLoginValid: false,
    isPasswordValid: false
};

const connection = (state = initialSate, action) => {
    switch (action.type) {
        case types.CHANGE_LOGIN_INPUT:
            return {
                ...state,
                login: action.val,
                isLoginValid: connectUtil.isLoginValid(action.val)
            }
        case types.CHANGE_PASSWORD_INPUT:
            return {
                ...state,
                password: action.val,
                isPasswordValid: connectUtil.isPasswordValid(action.val)
            }
        default:
            return state;
    }
};

export default connection;
