import {connect} from "react-redux";
import ConnectionComponent from "../ui/Connection";

import {
    changeLoginInput,
    changePasswordInput
} from "../actions/connectionActions";
import {
    connection,
    linkedinConnection
} from "../actions/userActions";
import {
    displayLanding
} from "../actions/contentActions"

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
    return {
        changeLoginInput(val) {
            dispatch(changeLoginInput(val))
        },
        changePasswordInput(val) {
            dispatch(changePasswordInput(val))
        },
        loginRequest(login, password) {
            dispatch(connection(login, password))
        },
        displayLanding() {
            dispatch(displayLanding())
        },
        linkedinConnection() {
            dispatch(linkedinConnection())
        }
    };
}

const Connection = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConnectionComponent);

export default Connection;
