import { combineReducers } from 'redux'
import { daysReducer } from './days.js'

export const rootReducer = combineReducers({
  days: daysReducer,
//   current: userReducer,
})
