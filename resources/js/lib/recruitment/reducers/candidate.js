import * as types from "../actions/candidateTypes";

const initialSate = {
    isConnected: false,
    isFetching: false,
    isAdmin: false,
    data: {}
};

const candidate = (state = initialSate, action) => {
    switch (action.type) {

        default:
            return state;
    }
};

export default candidate;
