import {
  CURRENT, CURRENT_DROP,
} from '../action-type'

const initialState={
  current: null,
  currentDrop: false
}

export default (state = initialState, {type, payload }) => {
  switch (type) {
    case CURRENT:
      return {
        ...state,
        current: payload
      }
    // case CURRENT_DROP:
    //   return {
    //     ...state,
    //     currentDrop: !state.currentDrop
    //   }
    default:
      return state
  }
};
