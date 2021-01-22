import { CURRENT } from '../action-type'

export const setCurrent = (day) => {
  console.log('#day', day)
  return {
    type: CURRENT,
    payload: day
  }
};