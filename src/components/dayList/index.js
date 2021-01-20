import React from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

export const DayList = ({dayList}) => {
        return (
            <ul>
                <p>List</p>
                {
                    dayList != null && dayList.map((day) => {
                        // console.log("###DAY    ", day)
                        return (
                            <li key={day.day}>

                                <p>{day.type}</p>
                                {/*<p>{day.sun}</p>*/}

                            </li>
                        )
                    })
                }
            </ul>)
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
