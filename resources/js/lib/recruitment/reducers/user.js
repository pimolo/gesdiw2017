import * as types from "../actions/userTypes";

const initialSate = {
    isConnected: false,
    isFetching: false,
    isCandidate: false,
    isRecruiter: false,
    data: {},
    token: false,
    logout_error: false,
    suggested_offers: []
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
                isConnected: true,
                data: action.data,
                isRecruiter: action.data.isRecruiter || false,
                isCandidate: action.data.isCandidate || false
            }
        case types.TOKEN_RETREIVED:
            return {
                ...state,
                isFetching: false,
                isConnected: false,
                token: action.token
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
        case types.ADD_INTEREST_SUCCES:
            return {
                ...state,
                isFetching: false,
                data: {
                    ...state.data,
                    offers: action.all_offers
                }
            }
        case types.ADD_INTEREST_SUCCESS:
            return {
                ...state,
                isFetching: false
            }
        case types.RETREIVE_OFFERS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: {
                    ...state.data,
                    offers: action.offers
                }
            }
        case types.RETREIVED_SUGGESTED_OFFERS:
            return {
                ...state,
                isFetching: false,
                suggested_offers: action.offers
            }
        default:
            return state;
    }
};

export default user;
