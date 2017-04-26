import * as types from "../actions/navbarTypes";

const initialSate = {
    display: true
};

const navbar = (state = initialSate, action) => {
    switch (action.type) {
        case types.TOGGLE_DISPLAY:
            return {
                ...state,
                display: !state.display
            }
        default:
            return state;
    }
};

export default navbar;
