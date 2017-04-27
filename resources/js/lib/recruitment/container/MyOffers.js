import {connect} from "react-redux";
import MyOffersComponent from "../ui/MyOffers";

import {
    displayMyCalendar
} from "../actions/contentActions";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
    return {
        displayMyCalendar() {
            dispatch(displayMyCalendar())
        }
    };
}

const MyOffers = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyOffersComponent);

export default MyOffers;
