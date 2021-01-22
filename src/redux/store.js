import {combineReducers} from "redux";
import DayReducers from "./reducers/data"
import CurrentReducers from "./reducers/current"

const Reducers = combineReducers( {
    days: DayReducers,
    currentDay: CurrentReducers
})

export default Reducers