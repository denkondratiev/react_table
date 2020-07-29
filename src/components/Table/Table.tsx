import React, { useState, SyntheticEvent } from 'react'
import TableRow from '../TableRow/TableRow'
import AverageRow from '../AverageRow/AverageRow'
import { getLightClosest } from '../../helpers/getLightClosest'
import { getRowSum, getLightsAmount, getTable, getRows, getCells } from '../../helpers/selectors'
import { increment } from '../../store/actions'
import './Table.css'
import { useDispatch, useSelector } from 'react-redux'

const Table: React.FC = ()  => {
  const [lightList, setLightList] = useState({})
  const dispatch = useDispatch();

  const table = useSelector(getTable);
  const lightsAmount = useSelector(getLightsAmount);
  const rows = useSelector(getRows);
  const cells = useSelector(getCells);
  const sumRowArray = useSelector(getRowSum)

  const onMouseEnterHandler = (event: SyntheticEvent<HTMLTableCellElement>) => {
    const { id } = event.currentTarget
    const obj = getLightClosest(id, cells, lightsAmount)
    setLightList(obj)
  }

  const onMouseLeaveHandler = (): void => {
    setLightList({})
  }

  const onClickIncrement = (event: SyntheticEvent<HTMLTableCellElement>) => {
    const { id } = event.currentTarget
    dispatch(increment(id))
  }

  return (
    <>
      {table.length > 0 && (
        <table className="table table-dark">
          <tbody>
            {table.map((rowId: string, index: number) => (
              <TableRow
                key={rowId}
                id={rowId}
                rowSum={sumRowArray[index]}
                row={rows[rowId]}
                cells={cells}
                lightList={lightList}
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

export default React.memo(Table)
