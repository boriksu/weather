
const initialState = 
[
    {
        id: 1,
        temp: 25,
        sun: true
    },
    {
        id: 2,
        temp: 17,
        sun: true
    },
    {
        id: 3,
        temp: 22,
        sun: false
    }
]


export function daysReducer(state = initialState, {type, payload}) {
switch (type) {
    case 'hello':
        return state
    default:
        return state
}
}
