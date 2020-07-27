import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { TableRowShape } from '../../helpers/shapes'
import TableCell from '../TableCell/TableCell'
import TableCellSum from '../TableCellSum/TableCellSum'

const areEqual = (prevProps, nextProps) => {
  const { row, cells, lightArray } = prevProps

  for (const id of row) {
    if (nextProps.cells[id].amount !== cells[id].amount) {
      return false
    }
    if (nextProps.lightArray[id] !== lightArray[id]) {
      return false
    }
  }
  return true
}

const TableRow = (props) => {
  const {
    id,
    row,
    cells,
    rowSum,
    lightArray,
    onMouseEnterHandler,
    onMouseLeaveHandler
  } = props

  const [showPercent, setShowPercent] = useState(false)

  const onMouseEnterPercent = () => {
    setShowPercent(true)
  }

  const onMouseLeavePercent = () => {
    setShowPercent(false)
  }

  return (
    <tr
      id={id}
    >
      {row.map(cellId => {
        return (
          <TableCell
            key={uuidv4()}
            id={cellId}
            cell={cells[cellId]}
            onMouseEnterHandler={onMouseEnterHandler}
            onMouseLeaveHandler={onMouseLeaveHandler}
            lightArray={lightArray}
            showPercent={showPercent}
            percent={(cells[cellId].amount / rowSum * 100).toFixed(2)}
          />
        )
      })}
      <TableCellSum
        rowSum={rowSum}
        onMouseEnterPercent={onMouseEnterPercent}
        onMouseLeavePercent={onMouseLeavePercent}
      />
    </tr>
  )
}

TableRow.propTypes = TableRowShape.isRequired

export default React.memo(TableRow, areEqual)
