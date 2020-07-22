import React from 'react'
import { connect } from 'react-redux'
import store from '../../store/reducers'
import { setTable } from '../../store/actions'
import { RowSumItemShape } from '../../helpers/shapes'

const RowSumItem = (props) => {
  const { table, cellValue, columns, rowSum } = props

  const onMouseOverHandler = (id) => {
    const lightArray = table.slice(id * columns, (id * columns) + columns)

    const newTable = table.map(item => (
      lightArray.some(lightItem => lightItem.id === item.id)
        ? { ...item, showPercent: true }
        : { ...item, showPercent: false }
    ))

    store.dispatch(setTable(newTable))
  }

  const onMouseOutHandler = () => {
    const newTable = table.map(item => ({
      ...item,
      showPercent: false
    }))

    store.dispatch(setTable(newTable))
  }

  return (
    <td
      id={cellValue}
      onMouseOver={(event) => onMouseOverHandler(event.target.id)}
      onMouseOut ={onMouseOutHandler}
    >
      Sum: {rowSum}
    </td>

  )
}

RowSumItem.propTypes = RowSumItemShape.isRequired

const mapStateToProps = (state) => ({
  table: state.table,
  columns: state.columns
})

export default connect(mapStateToProps)(RowSumItem)
