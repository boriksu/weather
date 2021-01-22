import React from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PropTypes from 'prop-types'
import "./../../styles2/index.scss"
import cn from 'classnames';


const date = (day) => {
  const moment = require('moment');
  moment.locale('ru')
  return moment(day).format('dddd');
}

const Day = ({day, current}) => {
  let style = 'day ' + day.type
  // if (current.day === day.day) {
  // //   style = style + ' selected'
  // // }
  // console.log(current.day, day.day)
  return (
            <div className={style}>
              <p>{date(day.day)}</p>
              <span>{day.temperature}</span>
            </div>
  )
}

Day.propTypes = {
  day : PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    current: state.currentDay.current
  }
}

function needed () {
  console.log('#needed_dispatch')
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  needed
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Day)
