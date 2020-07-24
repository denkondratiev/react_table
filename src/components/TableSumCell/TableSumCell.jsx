import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { connect } from 'react-redux'
import store from '../../store/reducers'
import { setTable } from '../../store/actions'
import { TableSumCellShape } from '../../helpers/shapes'

const TableSumCell = (props) => {
  const { table, rowSum, rowIndex } = props

  const onMouseOverHandler = (id) => {
    const lightArray = table[id].map(cell => ({
      ...cell,
      showPercent: true
    }))

    const tableCopy = [...table]

    tableCopy.splice(id, 1, lightArray)

    store.dispatch(setTable(tableCopy))
  }

  const onMouseOutHandler = () => {
    const newTable = table.map(row => (
      row.map(cell => (
        { ...cell, showPercent: false }
      ))
    ))
    store.dispatch(setTable(newTable))
  }

  return (
    <td
      key={uuidv4()}
      id={rowIndex}
      onMouseEnter={(event) => onMouseOverHandler(event.target.id)}
      onMouseLeave={onMouseOutHandler}
    >
      Sum: {rowSum}
    </td>

  )
}

TableSumCell.propTypes = TableSumCellShape.isRequired

const mapStateToProps = (state) => ({
  table: state.table
})

export default connect(mapStateToProps)(TableSumCell)
