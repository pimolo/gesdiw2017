import * as types from "../actions/userTypes";

const initialSate = {
    isConnected: false,
    isFetching: false,
    isCandidate: false,
    isRecruter: false,
    isEmployee: false,
    data: {}
};

const user = (state = initialSate, action) => {
    switch (action.type) {

        default:
            return state;
    }
};

export default user;
