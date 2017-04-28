import * as types from "./userTypes";
import UserApi from "../API/user/userApi";
import OffersApi from "../API/offers/offersApi";
import connectionUtil from "../utils/connection";

const connectUtil = new connectionUtil();
const userApi = new UserApi();
const offerApi = new OffersApi();

const receivedError = error => {
    console.group();
    console.error("server error: ", error);
    console.groupEnd();
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

const retreiveTokenSuccess = token => {
    return {
        type: types.TOKEN_RETREIVED,
        token
    }
}

const retreiveOffers = offers => {
    return {
        type: types.RETREIVE_OFFERS_SUCCESS,
        offers
    }
}

export const getMe = token => {
    return dispatch => {
        dispatch(requestConnection());
        userApi.getMe(token, response => {
            if ( response.error ) {
                dispatch(receivedError(response.error));
                dispatch(logout());
            }
            else {
                dispatch(requestConnection());
                userApi.getApplies(token, res => {
                    dispatch(loginSuccess(response));
                    if ( res.error ) {
                        console.debug("couldn't fetch user applies", res)
                    } else
                        dispatch(retreiveOffers(res));
                })
                dispatch(loginSuccess(response))
            }
        });
    }
}

export const connection = (login, password) => {
    return dispatch => {
        dispatch(requestConnection());
        userApi.connection(login, password,
            response => {
                if ( response.token ) {
                    dispatch(retreiveTokenSuccess(response.token));
                    connectUtil.storeSession(response.token);
                    dispatch(getMe(response.token));
                }
                else {
                    dispatch(receivedError(response));
                }
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
        connectUtil.killSession();
        dispatch(logoutSuccess());
    };
}

export const restoreSession = () => {
    return (dispatch, getState) => {
        if ( !getState().user.isConnected ) {
            const stored_token = connectUtil.getSession();
            if ( stored_token ) {
                dispatch(retreiveTokenSuccess(stored_token));
                dispatch(getMe(stored_token));
            }
        }
    };
}

export const linkedinConnection = () => {
    return dispatch => {
        dispatch(requestConnection());
        userApi.linkedinConnection(response => {
            if ( response.error )
                dispatch(loginSuccess(response));
            else
                dispatch(receivedError());
        });
    }
}

const offerAddedToInterest = all_offers => {
    return {
        type: types.ADD_INTEREST_SUCCESS,
        all_offers
    };
};

export const addOfferToInterests = offer => {
    return (dispatch, getState) => {
        dispatch(requestConnection());
        offerApi.addOfferToUserInterests(getState().user.token, offer._id, response => {
            if ( response.error )
                dispatch(receivedError(response.error));
            else
                dispatch(offerAddedToInterest(response));
        })
    }
}
