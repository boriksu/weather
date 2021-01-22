import { FILTER_ALL, FILTER_CLOUDY, FILTER_DROP, FILTER_MAX, FILTER_MIN, FILTER_SUNNY } from '../action-type'

export const filterAll = () => {
  return {
    type: FILTER_ALL,
  }
};

export const filterSunny = () => {
  return {
    type: FILTER_SUNNY,
  }
};

export const filterCloudy = () => {
  return {
    type: FILTER_CLOUDY,
  }
};

export const filterMin = (temp) => {
  return {
    type: FILTER_MIN,
    payload: temp
  }
};

export const filterMax = (temp) => {
  return {
    type: FILTER_MAX,
    payload: temp
  }
};
export const filterDrop = () => {
  return {
    type: FILTER_DROP,
  }
};
