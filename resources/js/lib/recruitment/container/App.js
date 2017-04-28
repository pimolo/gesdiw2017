import {connect} from "react-redux";
import AppComponent from "../ui/App";

import { restoreSession } from "../actions/userActions";
import { getAllOffers } from "../actions/offersActions";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
    return {
        onReady() {
            dispatch(restoreSession());
            dispatch(getAllOffers());
        }
    };
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppComponent);

export default App;
