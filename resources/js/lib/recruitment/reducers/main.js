import {combineReducers} from "redux";
import user from "./user";
import navbar from "./navbar";
import content from "./content";

const Main = combineReducers({
    user,
    navbar,
    content
});

export default Main;
