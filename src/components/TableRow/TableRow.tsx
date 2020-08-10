import React, { useState } from 'react'
import { TableRowProps } from '../../helpers/interface'
import TableCell from '../TableCell/TableCell'
import TableCellSum from '../TableCellSum/TableCellSum'

const areEqual = (prevProps: TableRowProps, nextProps: TableRowProps): boolean => {
  const { row, cells, lightList } = prevProps

  const equal = !row.some((id) => (
    nextProps.cells[id].amount !== cells[id].amount ||
    nextProps.lightList[id] !== lightList[id]
  ))

  return equal
}

const TableRow: React.FC<TableRowProps> = (props) => {
  const {
    id,
    row,
    cells,
    rowSum,
    lightList,
    onMouseEnterHandler,
    onMouseLeaveHandler,
    onClickIncrement
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
        const value = cells[cellId].amount
        const percent = (cells[cellId].amount / rowSum * 100).toFixed(2)
        let styleString = ''

        if (lightList[cellId]) { styleString += '#6c757d' }

        if (showPercent) {
          styleString += `linear-gradient(90deg, rgba(220,53,69,1) ${percent}%, rgba(108,117,125,1) ${percent}%)`
        }

        return (
          <TableCell
            key={cellId}
            id={cellId}
            amount={showPercent ? percent : value}
            styleString={styleString}
            onMouseEnterHandler={onMouseEnterHandler}
            onMouseLeaveHandler={onMouseLeaveHandler}
            onClickIncrement={onClickIncrement}
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

export default React.memo(TableRow, areEqual)
