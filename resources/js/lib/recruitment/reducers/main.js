import {combineReducers} from "redux";
import user from "./user";
import navbar from "./navbar";

const Main = combineReducers({
    user,
    navbar
});

export default Main;
