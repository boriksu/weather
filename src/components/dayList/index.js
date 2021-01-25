import React from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import "./../../styles2/index.scss"
import { FILTER_ALL, FILTER_CLOUDY, FILTER_SUNNY } from '../../redux/action-type'
import Day from '../day'
import { setCurrent } from '../../redux/actions/current'

export const DayList = ({dayList, current, setCurrent}) => {

  // console.log("#empty", !dayList)
  // dayList && setCurrent(dayList[0])
  if (dayList && dayList.length === 0) {
    current && setCurrent(null)
    // console.log("#empty", dayList)
    return (
      <div className="forecast">
      <p className="message">По заданным критериям нет доступных дней!</p>
    </div>)
  }
  return (
    <div className="forecast">
          {
              dayList != null && dayList.map((day) => {
                  // console.log("###DAY    ", day)
                  return <Day day = {day}/>
              })
          }
      </div>)
}

const getFilter = (state, dayList) => {
  const { filter } = state.days
  if (dayList == null)
    return null
  switch (filter) {
    case FILTER_ALL:
      return dayList.slice(0, 7)
    case FILTER_SUNNY:
      return dayList.filter(({type}) => type === 'sunny')
    case FILTER_CLOUDY:
      return dayList.filter(({type}) => type === 'cloudy')
    default:
      return dayList.slice(0, 7)
  }
}

const getFilterTemp = (state) => {
  const { min, max } = state.days.filterTemp
  const { dayList } = state.days
  if (max && min)
      return dayList.filter(({temperature}) => temperature >= min && temperature <= max)
  else if (max)
    return dayList.filter(({temperature}) => temperature <= max)
  else if (min)
    return dayList.filter(({temperature}) => temperature >= min)
  else
    return dayList
}

function mapStateToProps(state) {
  const list = getFilterTemp(state)
  return {
    dayList: getFilter(state, list),
    current: state.currentDay.current
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    setCurrent
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(DayList)
