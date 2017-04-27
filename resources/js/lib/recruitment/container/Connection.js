import {connect} from "react-redux";
import ConnectionComponent from "../ui/Connection";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
    return {

    };
}

const Connection = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConnectionComponent);

export default Connection;
