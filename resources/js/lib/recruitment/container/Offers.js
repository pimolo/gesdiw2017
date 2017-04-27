import {connect} from "react-redux";
import OffersComponent from "../ui/Offers";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
    return {
        onReady: () => {

        }
    };
}

const Offers = connect(
    mapStateToProps,
    mapDispatchToProps
)(OffersComponent);

export default Offers;
