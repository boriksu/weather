import React, { useEffect } from 'react';
import DayList from './dayList'
import { addData } from '../redux/actions'
import { connect } from 'react-redux'


const App = (props) => {

  useEffect(() => {
    console.log("##useEffect")
    props.addData()
  })

  return (
  <div>
    <h1>To do list from</h1>
    <DayList/>
  </div>
  )
}

const mapDispatchToProps =  {
  addData
}

export default connect(null, mapDispatchToProps)(App)

