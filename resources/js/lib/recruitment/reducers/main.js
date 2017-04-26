import {combineReducers} from "redux";
import candidate from "./candidate";
import navbar from "./navbar";

const Main = combineReducers({
    candidate,
    navbar
});

export default Main;
