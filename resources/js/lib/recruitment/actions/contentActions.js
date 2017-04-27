import * as types from "./contentTypes";

export const displayOffers = () => {
    return {
        type: types.VIEW_OFFERS
    }
};
export const displayMyOffers = () => {
    return {
        type: types.VIEW_MY_OFFERS
    }
};
export const displayMyTests = () => {
    return {
        type: types.VIEW_MY_TESTS
    }
};
export const displayMyProfile = () => {
    return {
        type: types.VIEW_MY_PROFILE
    }
};
