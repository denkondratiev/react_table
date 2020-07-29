import React from 'react'
import { TableCellSumProps } from '../../helpers/interface'

const areEqual = (prevProps: TableCellSumProps, nextProps: TableCellSumProps) => {
  const { rowSum } = prevProps

  if (nextProps.rowSum !== rowSum) {
    return false
  }
  return true
}

const TableCellSum: React.FC<TableCellSumProps> = (props) => {
  const {
    rowSum,
    onMouseEnterPercent,
    onMouseLeavePercent
  } = props

  return (
    <td
      onMouseEnter={onMouseEnterPercent}
      onMouseLeave={onMouseLeavePercent}
    >
      Sum: {rowSum}
    </td>

  )
}

export default React.memo(TableCellSum, areEqual)
