import {connect} from "react-redux";
import NavbarComponent from "../ui/Navbar";

import {
    toggleNavbar
} from "../actions/navbarActions"
import {
    connection,
    logout
} from "../actions/userActions"

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
    return {
        connection(login, password) {
            dispatch(connection(login, password));
        },
        logout() {
            dispatch(logout());
        }
    };
}

const Navbar = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavbarComponent);

export default Navbar;
