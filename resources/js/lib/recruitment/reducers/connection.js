import * as types from "../actions/connectionTypes";

const login_regex =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const isLoginValid = login => login_regex.test(login);
const isPasswordValid = password => password.length > 3;

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
                isLoginValid: isLoginValid(action.val)
            }
        case types.CHANGE_PASSWORD_INPUT:
            return {
                ...state,
                password: action.val,
                isPasswordValid: isPasswordValid(action.val)
            }
        default:
            return state;
    }
};

export default connection;
