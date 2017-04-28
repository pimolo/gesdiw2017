import {combineReducers} from "redux";
import user from "./user";
import navbar from "./navbar";
import content from "./content";
import connection from "./connection";
import offers from "./offers";

const Main = combineReducers({
    user,
    navbar,
    connection,
    content,
    offers
});

export default Main;
