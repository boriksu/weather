import React from 'react'
import "./../../styles2/index.scss"
import { connect } from 'react-redux'
import cn from 'classnames';

const CurrentDay = ({day}) => {
  const moment = require('moment');

  if (day) {
    // console.log("DAY", day)
    return (
      <div>
      <div className="head">
        <div className={cn(day.type === 'sunny' && "icon sunny",
          day.type === 'cloudy' && "icon cloudy",
          day.type === 'rainy' && "icon rainy",
        )}></div>
        <div className="current-date">
          <p>{moment(day.day).format('dddd')}</p>
          <span>{moment(day.day).format('DD MMMM')}</span></div>
      </div>

      <div className="current-weather">
        <p className="temperature">{day.temperature}</p>
        <p className="meta">
          <span className="rainy">%{day.rain_probability}</span>
          <span className="humidity">%{day.humidity}</span>
        </p>
      </div>
      </div>
    )
  }
  return (
    null
  )

}

function mapStateToProps(state) {
  // console.log('#stateCURRENT', state)
  return {
    day: state.currentDay.current
  }
}

export default connect(mapStateToProps)(CurrentDay)
// export default CurrentDay