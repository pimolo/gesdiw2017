import {connect} from "react-redux";
import MyOffersComponent from "../ui/MyOffers";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
    return {
        onReady: () => {

        }
    };
}

const MyOffers = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyOffersComponent);

export default MyOffers;
