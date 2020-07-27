import React from 'react'
import { TableCellShape } from '../../helpers/shapes'
import './TableCell.css'

const areEqual = (prevProps, nextProps) => {
  const { id, value, styleString } = prevProps

  if (nextProps.styleString !== styleString) {
    return false
  }
  if (nextProps.value !== value) {
    return false
  }
  if (nextProps.id !== id) {
    return false
  }
  return true
}

const TableCell = (props) => {
  const {
    id,
    value,
    styleString,
    onMouseEnterHandler,
    onMouseLeaveHandler,
    onClickIncrement
  } = props

  const styleObj = {
    background: `${styleString}`
  }

  return (
    <td
      id={id}
      onClick={(event) => onClickIncrement(event.target.id)}
      onMouseEnter={(event) => onMouseEnterHandler(event.target.id)}
      onMouseLeave={onMouseLeaveHandler}
      style={styleObj}
    >
      {value}
    </td>
  )
}

TableCell.propTypes = TableCellShape.isRequired

export default React.memo(TableCell, areEqual)
