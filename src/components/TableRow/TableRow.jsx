import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { TableRowShape } from '../../helpers/shapes'
import TableCell from '../TableCell/TableCell'
import TableSumCell from '../TableSumCell/TableSumCell'

export const TableRow = (props) => {
  const { row, rowIndex } = props

  let rowSum = null

  return (
    <tr
      key={uuidv4}
      id={rowIndex}
    >
      {row.map((cell, cellIndex) => {
        rowSum = row.map(cell => cell.amount).reduce((prev, cur) => prev + cur, 0)
        return (
          <TableCell
            key={uuidv4()}
            amount={cell.amount}
            id={cell.id}
            cellIndex={cellIndex}
            rowIndex={rowIndex}
            isLight={cell.isLight}
            showPercent={cell.showPercent}
            percent={(cell.amount / rowSum * 100).toFixed(2)}
          />

        )
      })}
      <TableSumCell
        key={uuidv4()}
        rowIndex={rowIndex}
        rowSum={rowSum}
      />
    </tr>
  )
}

TableRow.propTypes = TableRowShape.isRequired
