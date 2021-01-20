import React from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
// import {moment} from "moment"
// import Moment from 'moment'
import "./../../styles2/index.scss"
const date = (day) => {
  // let time = moment().format('dddd');
  var moment = require('moment');
  moment.locale('ru')
  return moment(day).format('dddd');

}

export const DayList = ({dayList}) => {
        return (
          <div className="forecast">
                <p>List</p>
                {
                    dayList != null && dayList.map((day) => {
                        // console.log("###DAY    ", day)
                        return (

                          <div className="day sunny">
                            <p>{date(day.day)}</p>
                            <span>{day.temperature}</span>
                          </div>

                            // <li key={day.day}>
                            //
                            //     <p>{data(day.day)}</p>
                            //     {/*<p>{day.sun}</p>*/}
                            //
                            // </li>
                        )
                    })
                }
            </div>)
}

function mapStateToProps(state) {
    console.log('#state', state)
    return {
        dayList: state.days.dayList
    }
}

function needed () {
    console.log('#needed_dispatch')
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    needed
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(DayList)
