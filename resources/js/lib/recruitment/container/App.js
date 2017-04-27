import {connect} from "react-redux";
import AppComponent from "../ui/App";

import { restoreSession } from "../actions/userActions"

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
    return {
        onReady() {
            dispatch(restoreSession());
        }
    };
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppComponent);

export default App;
