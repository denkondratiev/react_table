import React, { useState } from 'react'
import { connect } from 'react-redux'
import { TableShape } from '../../helpers/shapes'
import TableRow from '../TableRow/TableRow'
import AverageRow from '../AverageRow/AverageRow'
import { getRowSum, getLightsAmount } from '../../helpers/selectors'
import { getLightClosest } from '../../helpers/getLightClosest'
import { increment } from '../../store/actions'
import './Table.css'

const Table = (props) => {
  const {
    table,
    rows,
    cells,
    sumRowArray,
    lightsAmount,
    incrementCell
  } = props

  const [lightArray, setLightArray] = useState({})

  const onMouseEnterHandler = (id) => {
    const arr = getLightClosest(id, cells, lightsAmount)
    setLightArray(arr)
  }

  const onMouseLeaveHandler = () => {
    setLightArray({})
  }

  const onClickIncrement = (id) => {
    incrementCell(id)
  }

  return (
    <>
      {table.length > 0 && (
        <table className="table table-dark">
          <tbody>
            {table.map((rowId, index) => (
              <TableRow
                key={rowId}
                id={rowId}
                rowSum={sumRowArray[index]}
                row={rows[rowId]}
                cells={cells}
                lightArray={lightArray}
                onMouseEnterHandler={onMouseEnterHandler}
                onMouseLeaveHandler={onMouseLeaveHandler}
                onClickIncrement={onClickIncrement}
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

const mapDispatchToProps = (dispatch) => ({
  incrementCell: id => dispatch(increment(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Table))
