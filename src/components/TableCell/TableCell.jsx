import React from 'react'
import './TableCell.css'
import { TableCellShape } from '../../helpers/shapes'
import { connect } from 'react-redux'
// import store from '../../store/reducers'
import { increment, setLightCells } from '../../store/actions'

const TableCell = (props) => {
  const {
    // id,
    // table,
    amount,
    percent,
    isLight,
    cellIndex,
    rowIndex,
    showPercent,
    increment
    // setLightCells,
    // highlights
  } = props

  const stylePercent = {
    backgroundImage: `linear-gradient(90deg, rgba(220,53,69,1) ${percent}%, rgba(108,117,125,1) ${percent}%)`
  }

  const onClickHandler = ({ id, cellIndex }) => {
    increment(Number(id), cellIndex)
  }

  // const onMouseOverHandler = ({ id, cellIndex }) => {
  //   setLightCells(Number(id), cellIndex, amount, highlights)
  // }

  // const onMouseOverHandler = () => {
  //   const lightArray = table.map(item => ({
  //     ...item,
  //     difference: Math.abs(item.amount - amount)
  //   })).sort((a, b) => a.difference - b.difference).slice(0, highlights + 1)

  //   const newTable = table.map(item => (
  //     lightArray.some(lightItem => lightItem.id === item.id)
  //       ? { ...item, isLight: true }
  //       : { ...item, isLight: false }
  //   ))

  //   store.dispatch(setTable(newTable))
  // }

  // const onMouseOutHandler = () => {
  //   const newTable = table.map(item => ({
  //     ...item,
  //     isLight: false
  //   }))

  //   store.dispatch(setTable(newTable))
  // }

  return (
    <td
      // id={}
      id={rowIndex}
      cellIndex={cellIndex}
      style={showPercent ? stylePercent : {}}
      className={`${isLight ? 'table-item--light' : ''}`}
      onClick={(event) => onClickHandler(event.target)}
      // onMouseOver={(event) => onMouseOverHandler(event.target)}
      // onMouseOut={onMouseOutHandler}
    >
      {
        showPercent
          ? `${percent}%`
          : amount
      }
    </td>
  )
}

TableCell.propTypes = TableCellShape.isRequired

const mapStateToProps = (state) => ({
  table: state.table,
  highlights: state.highlights
})

const mapDispatchToProps = (dispatch) => ({
  increment: (id, cellIndex) => dispatch(increment(id, cellIndex)),
  setLightCells: (id, cellIndex, amount, highlights) => dispatch(setLightCells(id, cellIndex, amount, highlights))
})

export default connect(mapStateToProps, mapDispatchToProps)(TableCell)
