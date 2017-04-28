import {connect} from "react-redux";
import OfferModalComponent from "../ui/OfferModal";

import {
    hide_offer
} from "../actions/offersActions";
import {
    addOfferToInterests
} from "../actions/userActions";
import {
    displayLogin
} from "../actions/contentActions"


const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
    return {
        hide_offer() {
            dispatch(hide_offer());
        },
        addOfferToInterests(offer) {
            dispatch(addOfferToInterests(offer));
        },
        displayLogin() {
            dispatch(displayLogin());
        }
    };
}

const OfferModal = connect(
    mapStateToProps,
    mapDispatchToProps
)(OfferModalComponent);

export default OfferModal;
