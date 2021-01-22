import {
  CURRENT
} from '../action-type'

const initialState={
  current: null
}

export default (state = initialState, {type, payload }) => {
  switch (type) {
    case CURRENT:
      return {
        ...state,
        current: payload
      }
    default:
      return state
  }
};
