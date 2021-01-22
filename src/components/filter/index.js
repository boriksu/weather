import React, { useState } from 'react'
import cn from 'classnames';
import "./../../styles2/index.scss"
import { filterAll, filterCloudy, filterDrop, filterMax, filterMin, filterSunny } from '../../redux/actions/filter'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Filter = ({filterDrop, filterSunny, filterCloudy, filterMin, filterMax}) => {

  const [cloudy, setCloudy] = useState(false)
  const [sunny, setSunny] = useState(false)
  const [button, setButton] = useState('Отфильтровать')
  const [disabled, setDisabled] = useState(false)
  const [min, setMin] = useState('')
  const [max, setMax] = useState('')

  const addFilterHandle = () => {
    if (button === 'Отфильтровать') {
      if (sunny) {
        filterSunny()
      } else if (cloudy) {
        filterCloudy()
      }
      setDisabled(true)
      filterMax(max)
      filterMin(min)
      setButton('Сбросить')
    }
    else {
      setButton('Отфильтровать')
      setDisabled(false)
      setCloudy(false)
      setSunny(false)
      setMin('')
      setMax('')
      // filterAll()
      filterDrop()
    }
  }

  const handleClickCloudy = () => {
    if (!cloudy) {
      setSunny(false)
    }
    setCloudy(!cloudy)
  }

  const handleClickSunny = () => {
    if (!sunny) {
      setCloudy(false)
    }
    setSunny(!sunny)
  }

  const handleChangeMin = (e) => setMin(e.target.value)
  const handleChangeMax = (e) => setMax(e.target.value)

  return (
    <div className="filter">
      <span className={cn(cloudy && "checkbox selected", "checkbox")}>Облачно
        <input
          type="checkbox"
          onChange={() => handleClickCloudy()}
          disabled={disabled}
        />
      </span>

      <span className={cn(sunny && "checkbox selected", "checkbox")}>Солнечно
        <input
          type="checkbox"
          onChange={() => handleClickSunny(sunny, setSunny)}
          disabled={disabled}
        />
      </span>

      <p className="custom-input">
        <label htmlFor="min-temperature">Минимальная температура</label>
        <input
          id="min-temperature"
          type="number"
          value={min}
          onChange={handleChangeMin}
          disabled={disabled}
        /></p>
      <p className="custom-input">
        <label htmlFor="min-temperature">Максимальная температура</label>
        <input
          id="max-temperature"
          type="number"
          value={max}
          onChange={handleChangeMax}
          disabled={disabled}
        />
      </p>
      <button disabled={!(cloudy || sunny || max || min)}
              onClick={addFilterHandle}
      >{button}</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  filterDrop,
  filterSunny,
  filterCloudy,
  filterMin,
  filterMax
}, dispatch)


export default connect(null, mapDispatchToProps)(Filter)
