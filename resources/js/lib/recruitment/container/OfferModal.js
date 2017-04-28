import {connect} from "react-redux";
import OfferModalComponent from "../ui/OfferModal";

import {
    hide_offer
} from "../actions/offersActions";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
    return {
        hide_offer() {
            dispatch(hide_offer())
        }
    };
}

const OfferModal = connect(
    mapStateToProps,
    mapDispatchToProps
)(OfferModalComponent);

export default OfferModal;
