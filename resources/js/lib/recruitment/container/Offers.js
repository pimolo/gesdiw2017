import {connect} from "react-redux";
import OffersComponent from "../ui/Offers";

import {
    display_offer
} from "../actions/offersActions";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
    return {
        display_offer(offer) {
            dispatch(display_offer(offer))
        }
    };
}

const Offers = connect(
    mapStateToProps,
    mapDispatchToProps
)(OffersComponent);

export default Offers;
