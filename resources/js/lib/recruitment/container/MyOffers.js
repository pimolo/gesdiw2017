import {connect} from "react-redux";
import MyOffersComponent from "../ui/MyOffers";

import {
    displayMyCalendar
} from "../actions/contentActions";
import {
    display_offer
} from "../actions/offersActions";
import {
    getSuggestedOffers
} from "../actions/userActions";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
    return {
        displayMyCalendar() {
            dispatch(displayMyCalendar())
        },
        display_offer(offer) {
            dispatch(display_offer(offer))
        },
        getSuggestedOffers() {
            dispatch(getSuggestedOffers())
        }
    };
}

const MyOffers = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyOffersComponent);

export default MyOffers;
