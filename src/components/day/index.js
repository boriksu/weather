import React from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PropTypes from 'prop-types'
import "./../../styles2/index.scss"
import cn from 'classnames';


const date = (day) => {
  var moment = require('moment');
  moment.locale('ru')
  return moment(day).format('dddd');
}

const Day = ({day}) => {
  return (
            <div className={cn(day.type === 'sunny' && "day sunny",
              day.type === 'cloudy' && "day cloudy",
              day.type === 'rainy' && "day rainy",
              )}>
              <p>{date(day.day)}</p>
              <span>{day.temperature}</span>
            </div>
  )
}

Day.propTypes = {
  day : PropTypes.object.isRequired
}

function needed () {
  console.log('#needed_dispatch')
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  needed
}, dispatch)


export default connect(null, mapDispatchToProps)(Day)
