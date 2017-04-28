import * as types from "../actions/offersTypes";

const initialSate = {
    data: [],
    isFetching: false,
    fetch_error: false,
    displaid_offer: false
};

const content = (state = initialSate, action) => {
    switch (action.type) {
        case types.REQUEST_ONGOING:
            return {
                ...state,
                isFetching: true,
                fetch_error: false
            }
        case types.RECEIVED_ERROR:
            return {
                ...state,
                fetch_error: true,
                isFetching: false
            }
        case types.RECEIVED_ALL_OFFERS:
            return {
                ...state,
                isFetching: false,
                fetch_error: false,
                data: Array.from(action.data)
            }
        case types.SHOW_OFFER:
            return {
                ...state,
                displaid_offer: action.offer
            }
        case types.HIDE_OFFER:
            return {
                ...state,
                displaid_offer: false
            }
        default:
            return state;
    }
};

export default content;
