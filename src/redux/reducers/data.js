import { FETCHING_FAILURE, FETCHING_STARTED, FETCHING_SUCCESS } from '../action-type'

const initialState={
    dayList: null,
    fetching: false,
    error: null
}

export default (state = initialState, {type, payload }) => {
    switch (type) {
        case FETCHING_STARTED:
            console.log('start2')
            return {
                ...state,
                fetching: true
            }
        case FETCHING_SUCCESS:
            console.log('succeess2')
            return {
                ...state,
                fetching: false,
                dayList: payload,
                error: null
            }
        case FETCHING_FAILURE:
            return {
                ...state,
                fetching: false,
                error: payload
            }
        default:
            return state
    }
};
