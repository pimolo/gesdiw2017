import {combineReducers} from "redux";
import user from "./user";
import navbar from "./navbar";
import content from "./content";
import connection from "./connection";

const Main = combineReducers({
    user,
    navbar,
    connection,
    content
});

export default Main;
