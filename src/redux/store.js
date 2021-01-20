import {combineReducers} from "redux";
import DayReducers from "./reducers/data"

const Reducers = combineReducers( {
    days: DayReducers
})

export default Reducers