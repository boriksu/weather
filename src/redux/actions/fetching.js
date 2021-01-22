import { FETCHING_FAILURE, FETCHING_STARTED, FETCHING_SUCCESS } from '../action-type'
import { setCurrent } from './current'

export const addData = () => {
  return dispatch => {
    console.log('start1')
    dispatch(addDataStarted());

    fetch('https://lab.lectrum.io/rtx/api/forecast')
      .then(response => {
        return response.json();
        }).then(json => {
      console.log('succeess1')
        dispatch(addDataSuccess(json.data));
        dispatch(setCurrent(json.data[0]))
        }).catch(err => {
          console.log('Ошибка загрузки: ' + err.message);
          dispatch(addDataFailure(err.message));
        });

  };
};

const addDataSuccess = data => ({
  type: FETCHING_SUCCESS,
  payload: data
});

const addDataStarted = () => ({
  type: FETCHING_STARTED
});

const addDataFailure = error => ({
  type: FETCHING_FAILURE,
  payload: error
});