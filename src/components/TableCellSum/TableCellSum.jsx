import React from 'react'
import { TableCellSumShape } from '../../helpers/shapes'

const areEqual = (prevProps, nextProps) => {
  const { rowSum } = prevProps

  if (nextProps.rowSum !== rowSum) {
    return false
  }
  return true
}

const TableCellSum = (props) => {
  const {
    id,
    rowSum,
    onMouseEnterPercent,
    onMouseLeavePercent
  } = props

  return (
    <td
      id={id}
      onMouseEnter={onMouseEnterPercent}
      onMouseLeave={onMouseLeavePercent}
    >
      Sum: {rowSum}
    </td>

  )
}

TableCellSum.propTypes = TableCellSumShape.isRequired

export default React.memo(TableCellSum, areEqual)
