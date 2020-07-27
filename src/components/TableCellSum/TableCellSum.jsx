import React from 'react'
import { TableCellSumShape } from '../../helpers/shapes'

export const TableCellSum = (props) => {
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
