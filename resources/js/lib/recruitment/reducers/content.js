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
        default:
            return state;
    }
};

export default content;
