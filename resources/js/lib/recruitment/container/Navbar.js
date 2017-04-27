import {connect} from "react-redux";
import NavbarComponent from "../ui/Navbar";

import {
    toggleNavbar
} from "../actions/navbarActions"
import {
    connection,
    logout
} from "../actions/userActions"
import {
    displayOffers,
    displayMyOffers,
    displayMyTests,
    displayMyProfile,
    displayLanding,
    displayMyCalendar
} from "../actions/contentActions"

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
    return {
        connection(login, password) {
            dispatch(connection(login, password));
        },
        logout() {
            dispatch(logout());
            dispatch(displayLanding());
        },
        displayOffers() {
            dispatch(displayOffers());
        },
        displayMyOffers() {
            dispatch(displayMyOffers());
        },
        displayMyTests() {
            dispatch(displayMyTests());
        },
        displayMyProfile() {
            dispatch(displayMyProfile());
        },
        displayLanding() {
            dispatch(displayLanding());
        },
        displayMyCalendar() {
            dispatch(displayMyCalendar());
        }
    };
}

const Navbar = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavbarComponent);

export default Navbar;
