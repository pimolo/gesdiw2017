import * as types from "../actions/contentTypes";

const initialSate = {
    current: "offers"
};

const content = (state = initialSate, action) => {
    switch (action.type) {
        case types.VIEW_OFFERS:
            return {
                ...state,
                current: "offers"
            }
        case types.VIEW_MY_OFFERS:
            return {
                ...state,
                current: "my_offers"
            }
        case types.VIEW_MY_TESTS:
            return {
                ...state,
                current: "my_tests"
            }
        case types.VIEW_MY_PROFILE:
            return {
                ...state,
                current: "my_profile"
            }
        case types.VIEW_MY_CALENDAR:
            return {
                ...state,
                current: "my_calendar"
            }
        case types.VIEW_CONNECTION:
            return {
                ...state,
                current: "connection"
            }
        default:
            return state;
    }
};

export default content;
