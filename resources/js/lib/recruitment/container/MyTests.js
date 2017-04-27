import {connect} from "react-redux";
import MyTestsComponent from "../ui/MyTests";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
    return {
        onReady: () => {

        }
    };
}

const MyTests = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyTestsComponent);

export default MyTests;
