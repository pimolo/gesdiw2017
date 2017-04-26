import {connect} from "react-redux";
import NavbarComponent from "../ui/Navbar";

import {
    toggleNavbar
} from "../actions/navbarActions"

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
    return {

    };
}

const Navbar = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavbarComponent);

export default Navbar;
