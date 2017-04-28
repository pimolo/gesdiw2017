import * as types from "./offersTypes";
import OffersApi from "../API/offers/offersApi"

const offersApi = new OffersApi();

const request = () => {
    return {
        type: types.REQUEST_ONGOING
    }
}

const receivedError = error => {
    return {
        type: types.RECEIVED_ERROR
    }
}

const getAllSuccess = data => {
    return {
        type: types.RECEIVED_ALL_OFFERS,
        data: data.docs
    }
}

export const getAllOffers = () => {
    return dispatch => {
        dispatch(request())
        offersApi.getAll(response => {
            if ( response.error )
                dispatch(receivedError(response.error))
            else
                dispatch(getAllSuccess(response))
        });
    }
}
