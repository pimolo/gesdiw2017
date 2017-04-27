import * as types from "./connectionTypes";

export const changeLoginInput = val => {
    return {
        type: types.CHANGE_LOGIN_INPUT,
        val
    }
}
export const changePasswordInput = val => {
    return {
        type: types.CHANGE_PASSWORD_INPUT,
        val
    }
}
