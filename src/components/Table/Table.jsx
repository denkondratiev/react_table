import React from 'react'
import './Table.css'
import { connect } from 'react-redux'
import { TableShape } from '../../helpers/shapes'
import TableItem from '../TableItem/TableItem'
import AverageColumns from '../AverageColumns/AverageColumns'
import RowSumItem from '../RowSumItem/RowSumItem'

const Table = (props) => {
  const {
    rows,
    columns,
    table,
    showTable
  } = props

  const tableCopy = [...table]
  const rowLine = [...Array(rows).keys()]

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
                  <RowSumItem
                    rowSum={rowSum}
                    cellValue={row}
                  />
                </tr>
              )
            })}
            <AverageColumns />
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
