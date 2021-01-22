import React, { useEffect } from 'react';
import DayList from './dayList'
import { addData } from '../redux/actions/fetching'
import { connect } from 'react-redux'
import Filter from './filter'
import CurrentDay from './currentDay'


const App = (props) => {

  useEffect(() => {
    console.log("##useEffect")
    props.addData()
  })

  return (
  <main>
    <Filter/>
    <CurrentDay/>
    <DayList/>
  </main>
  )
}

const mapDispatchToProps =  {
  addData
}

export default connect(null, mapDispatchToProps)(App)

