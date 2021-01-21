import React, { useEffect } from 'react';
import DayList from './dayList'
import { addData } from '../redux/actions'
import { connect } from 'react-redux'
import Filter from './filter'


const App = (props) => {

  useEffect(() => {
    console.log("##useEffect")
    props.addData()
  })

  return (
  <main>
    <Filter/>
    <br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/>
    <DayList/>
  </main>
  )
}

const mapDispatchToProps =  {
  addData
}

export default connect(null, mapDispatchToProps)(App)

