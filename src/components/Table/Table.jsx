import React from 'react'
import './Table.css'
import { v4 as uuidv4 } from 'uuid'
import { connect } from 'react-redux'
import store from '../../store/reducers'
import { setTable } from '../../store/actions'
import { TableShape } from '../../helpers/shapes'
import TableItem from '../TableItem/TableItem'

const Table = (props) => {
  const {
    rows,
    columns,
    table,
    showTable
  } = props

  const tableCopy = [...table]
  const rowLine = [...Array(rows).keys()]
  const columnLine = [...Array(columns).keys()]
  const onlyAmount = table.map(item => item.amount)

  const averageColumnSum = columnLine.map((_, index) => {
    let sum = 0
    for (let i = index; i < onlyAmount.length; i += columns) {
      sum += onlyAmount[i]
    }
    return Math.floor(sum / rows)
  })

  const onMouseOverHandler = (id) => {
    const lightArray = table.slice(id * columns, (id * columns) + columns)

    const newTable = table.map(item => (
      lightArray.some(lightItem => lightItem.id === item.id)
        ? { ...item, showPercent: true }
        : { ...item, showPercent: false }
    ))

    store.dispatch(setTable(newTable))
  }

  const onMouseOutHandler = () => {
    const newTable = table.map(item => ({
      ...item,
      showPercent: false
    }))

    store.dispatch(setTable(newTable))
  }

  return (
    <>
      {showTable && (
        <table className="table table-dark">
          <tbody>
            {rowLine.map(row => {
              const oneRow = tableCopy.splice(0, columns)
              const rowSum = oneRow.map(item => item.amount).reduce((prev, cur) => prev + cur, 0)
              return (
                <tr key={row}>
                  {oneRow.map(item => (
                    <TableItem
                      key={item.id}
                      id={item.id}
                      amount={item.amount}
                      percent={(item.amount / rowSum * 100).toFixed(2)}
                      isLight={item.isLight}
                      showPercent={item.showPercent}
                    />
                  ))}
                  <td
                    id={row}
                    onMouseOver={(event) => onMouseOverHandler(event.target.id)}
                    onMouseOut ={onMouseOutHandler}
                  >Sum: {rowSum}</td>
                </tr>
              )
            })}
            {<tr>{averageColumnSum.map(item => (
              <td key={uuidv4()}>Average sum: {item}</td>
            ))}
            </tr>}
          </tbody>
        </table>
      )}
    </>
  )
}

Table.propTypes = TableShape.isRequired

const mapStateToProps = (state) => ({
  columns: state.columns,
  table: state.table,
  rows: state.rows,
  showTable: state.showTable
})

export default connect(mapStateToProps)(Table)
