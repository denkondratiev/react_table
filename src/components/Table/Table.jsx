import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { connect } from 'react-redux'
import { TableShape } from '../../helpers/shapes'
import { TableRow } from '../TableRow/TableRow'
import AverageRow from '../AverageRow/AverageRow'
import { getRowSum, getLightsAmount } from '../../helpers/selectors'
import { getLightClosest } from '../../helpers/getLightClosest'
import './Table.css'

const Table = (props) => {
  const {
    table,
    rows,
    cells,
    sumRowArray,
    lightsAmount
  } = props

  console.log(table, rows, cells)

  const [lightArray, setLightArray] = useState({})

  const onMouseEnterHandler = (id) => {
    const arr = getLightClosest(id, cells, lightsAmount)
    setLightArray(arr)
  }

  const onMouseLeaveHandler = () => {
    setLightArray({})
  }

  return (
    <>
      {table.length > 0 && (
        <table className="table table-dark">
          <tbody>
            {table.map((rowId, index) => (
              <TableRow
                key={uuidv4()}
                id={rowId}
                rowSum={sumRowArray[index]}
                row={rows[rowId]}
                cells={cells}
                lightArray={lightArray}
                onMouseEnterHandler={onMouseEnterHandler}
                onMouseLeaveHandler={onMouseLeaveHandler}
              />
            ))}
            <AverageRow />
          </tbody>
        </table>
      )}
    </>
  )
}

Table.propTypes = TableShape.isRequired

const mapStateToProps = state => ({
  table: state.table,
  rows: state.rows,
  cells: state.cells,
  sumRowArray: getRowSum(state),
  lightsAmount: getLightsAmount(state)
})

export default connect(mapStateToProps)(Table)
