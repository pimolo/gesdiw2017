import {connect} from "react-redux";
import MyProfileComponent from "../ui/MyProfile";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
    return {

    };
}

const MyProfile = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyProfileComponent);

export default MyProfile;
