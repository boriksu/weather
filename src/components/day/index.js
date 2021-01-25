import React from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PropTypes from 'prop-types'
import "./../../styles2/index.scss"
import { setCurrent } from '../../redux/actions/current'


const date = (day) => {
  const moment = require('moment');
  moment.locale('ru')
  return moment(day).format('dddd');
}

const Day = ({day, current, setCurrent}) => {
  let style = 'day ' + day.type
  if (current && current.day === day.day) {
    style = style + ' selected'
  }

  const addFilterHandle = () => setCurrent(day)

  return (
            <div className={style}
                 onClick={addFilterHandle}
            >
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

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setCurrent
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Day)
