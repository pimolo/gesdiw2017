import {connect} from "react-redux";
import AppComponent from "../ui/App";

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        onReady: () => {

        }
    };
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppComponent);

export default App;
