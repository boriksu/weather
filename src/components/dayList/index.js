import React from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import "./../../styles2/index.scss"
import { FILTER_ALL, FILTER_CLOUDY, FILTER_SUNNY } from '../../redux/action-type'
import Day from '../day'

export const DayList = ({dayList}) => {
        return (
          <div className="forecast">
                {
                    dayList != null && dayList.map((day) => {
                        console.log("###DAY    ", day)
                        return <Day day = {day}/>
                    })
                }
            </div>)
}

const getFilter = (state) => {
  const { dayList, filter } = state.days
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

function mapStateToProps(state) {
  // console.log('#state', state)
  return {
    dayList: getFilter(state)
  }
}


function needed () {
    console.log('#needed_dispatch')
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    needed
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(DayList)
