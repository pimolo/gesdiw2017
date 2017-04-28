import {connect} from "react-redux";
import OfferModalComponent from "../ui/OfferModal";

import {
    hide_offer
} from "../actions/offersActions";
import {
    addOfferToInterests
} from "../actions/userActions";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
    return {
        hide_offer() {
            dispatch(hide_offer());
        },
        addOfferToInterests(offer) {
            dispatch(addOfferToInterests(offer));
        }
    };
}

const OfferModal = connect(
    mapStateToProps,
    mapDispatchToProps
)(OfferModalComponent);

export default OfferModal;
