import {connect} from "react-redux";
import MyCalendarComponent from "../ui/MyCalendar";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
    return {
        
    };
}

const MyCalendar = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyCalendarComponent);

export default MyCalendar;
