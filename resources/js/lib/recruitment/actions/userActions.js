import * as types from "./userTypes";
import UserApi from "../API/user/userApi";

const userApi = new UserApi();

const receivedError = error => {
    return {
        type: types.RECEIVE_ERROR
    }
};
const requestConnection = () => {
    return {
        type: types.REQUEST_CONNECTION
    }
};
const loginSuccess = data => {
    return {
        type: types.CONNECTION_SUCCESS,
        data
    }
};
const loginRefused = () => {
    return {
        type: types.CONNECTION_REFUSED
    }
};

export const connection = (login, password) => {
    return dispatch => {
        dispatch(requestConnection());
        userApi.connection(login, password,
            response => {
                console.debug("received server response on login", response)
                if (response)
                    dispatch(loginSuccess(response));
                else if (response.fail_ids)
                    dispatch(loginRefused(response));
                else
                    dispatch(receivedError());
        });
    };
};

const requestLogout = () => {
    return {
        type: types.REQUEST_LOGOUT
    }
};
const logoutSuccess = () => {
    return {
        type: types.LOGOUT_SUCCESS
    }
};
const logoutRefused = () => {
    return {
        type: types.LOGOUT_REFUSED
    }
};
export const logout = () => {
    return dispatch => {
        dispatch(requestLogout());
        userApi.logout(response => {
            console.debug("received server response on logout", response)
            if (response)
                dispatch(logoutSuccess());
            else if (response.failed)
                dispatch(logoutRefused());
            else
                dispatch(receivedError());
        });
    };
}
