import React from 'react'
import { TableCellProps } from '../../helpers/interface'
import './TableCell.css'

const areEqual = (prevProps: TableCellProps, nextProps: TableCellProps) => {
  const { id, amount, styleString } = prevProps

  if (nextProps.styleString !== styleString) {
    return false
  }
  if (nextProps.amount !== amount) {
    return false
  }
  if (nextProps.id !== id) {
    return false
  }
  return true
}

const TableCell: React.FC<TableCellProps> = (props) => {
  const {
    id,
    amount,
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
      onClick={(event) => onClickIncrement(event)}
      onMouseEnter={(event) => onMouseEnterHandler(event)}
      onMouseLeave={onMouseLeaveHandler}
      style={styleObj}
    >
      {amount}
    </td>
  )
}

export default React.memo(TableCell, areEqual)
