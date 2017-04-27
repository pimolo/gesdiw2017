import * as types from "../actions/userTypes";

const initialSate = {
    isConnected: false,
    isFetching: false,
    isCandidate: false,
    isRecruter: false,
    isEmployee: false,
    data: {},
    logout_error: false
};

const user = (state = initialSate, action) => {
    switch (action.type) {
        case types.REQUEST_CONNECTION:
            return {
                ...state,
                isFetching: true
            }
        case types.CONNECTION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isConnected: true
            }
        case types.CONNECTION_REFUSED:
            return {
                ...state,
                isFetching: false,
                isConnected: false
            }
        case types.RECEIVE_ERROR:
            return {
                ...state,
                isFetching: false
            }
        case types.LOGOUT_SUCCESS:
            return initialSate
        case types.LOGOUT_REFUSED:
            return {
                ...state,
                logout_error: true
            }
        default:
            return state;
    }
};

export default user;
