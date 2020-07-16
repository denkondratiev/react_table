import React from 'react'
import { connect } from 'react-redux'
import store from '../../store/reducers'
import { setTable } from '../../store/actions'
import { TableItemShape } from '../../helpers/shapes'
import './TableItem.css'

const TableItem = (props) => {
  const {
    amount,
    id,
    percent,
    table,
    highlights,
    isLight,
    showPercent
  } = props

  const stylePercent = {
    backgroundImage: `linear-gradient(90deg, rgba(220,53,69,1) ${percent}%, rgba(108,117,125,1) ${percent}%)`
  }

  const incrementCell = (id) => {
    const newTable = table.map(item => (
      item.id === id
        ? {
          ...item,
          amount: item.amount + 1
        }
        : item
    ))

    store.dispatch(setTable(newTable))
  }

  const onMouseOverHandler = () => {
    const lightArray = table.map(item => ({
      ...item,
      difference: Math.abs(item.amount - amount)
    })).sort((a, b) => a.difference - b.difference).slice(0, highlights + 1)

    const newTable = table.map(item => (
      lightArray.some(lightItem => lightItem.id === item.id)
        ? { ...item, isLight: true }
        : { ...item, isLight: false }
    ))

    store.dispatch(setTable(newTable))
  }

  const onMouseOutHandler = () => {
    const newTable = table.map(item => ({
      ...item,
      isLight: false
    }))

    store.dispatch(setTable(newTable))
  }

  return (
    <td
      id={id}
      className={`${isLight ? 'table-item--light' : ''}`}
      onClick={(event) => incrementCell(event.target.id)}
      onMouseOver={onMouseOverHandler}
      onMouseOut={onMouseOutHandler}
      style={showPercent ? stylePercent : {}}
    >
      {
        showPercent
          ? `${percent}%`
          : amount
      }
    </td>
  )
}

TableItem.propTypes = TableItemShape.isRequired

const mapStateToProps = state => ({
  table: state.table,
  highlights: state.highlights
})

export default connect(mapStateToProps)(TableItem)
