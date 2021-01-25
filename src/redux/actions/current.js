import { CURRENT, CURRENT_DROP } from '../action-type'

export const setCurrent = (day) => {
  // console.log('#day', day)
  return {
    type: CURRENT,
    payload: day
  }
};

// export const currentDrop = () => {
//   return {
//     type: CURRENT_DROP,
//   }
// };