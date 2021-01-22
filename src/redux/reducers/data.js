import {
    CURRENT,
    FETCHING_FAILURE,
    FETCHING_STARTED,
    FETCHING_SUCCESS,
    FILTER_ALL,
    FILTER_CLOUDY, FILTER_DROP, FILTER_MAX, FILTER_MIN,
    FILTER_SUNNY,
} from '../action-type'

const initialState={
    dayList: null,
    fetching: false,
    error: null,
    filter: FILTER_ALL,
    filterTemp: {
        min: null,
        max: null
    }
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
        case FILTER_ALL:
            return {
                ...state,
                filter: FILTER_ALL
            }
        case FILTER_CLOUDY:
            return {
                ...state,
                filter: FILTER_CLOUDY
            }
        case FILTER_SUNNY:
            return {
                ...state,
                filter: FILTER_SUNNY
            }
        case FILTER_MIN:
            return {
                ...state,
                filterTemp: {
                    ...state.filterTemp,
                    min: payload
                }
            }
        case FILTER_MAX:
            return {
                ...state,
                filterTemp: {
                    ...state.filterTemp,
                    max: payload
                }
            }
        case FILTER_DROP:
            return {
                ...state,
                filter: FILTER_ALL,
                filterTemp: {
                    ...state.filterTemp,
                    max: null,
                    min: null
                }
            }
        default:
            return state
    }
};
