import React from 'react'
// import {connect} from "react-redux";
// import {bindActionCreators} from "redux";
// import {moment} from "moment"
// import Moment from 'moment'
import "./../../styles2/index.scss"

const Filter = () => {
  return (
    <div className="filter">
      <span className="checkbox">Облачно</span>
      <span className="checkbox">Солнечно</span>
      <p className="custom-input">
        <label htmlFor="min-temperature">Минимальная температура</label>
        <input id="min-temperature" type="number" value=""/></p>
      <p className="custom-input">
        <label htmlFor="min-temperature">Максимальная температура</label>
        <input id="max-temperature" type="number" value=""/>
      </p>
      <button disabled="">Отфильтровать</button>
    </div>
  )
}

// function mapStateToProps(state) {
//   console.log('#state', state)
//   return {
//     dayList: state.days.dayList
//   }
// }
//
// function needed () {
//   console.log('#needed_dispatch')
// }
//
// const mapDispatchToProps = (dispatch) => bindActionCreators({
//   needed
// }, dispatch)
//
//
// export default connect(mapStateToProps, mapDispatchToProps)(Filter)
export default Filter