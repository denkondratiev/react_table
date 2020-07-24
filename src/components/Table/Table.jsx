import React from 'react'
import './Table.css'
import { v4 as uuidv4 } from 'uuid'
import { connect } from 'react-redux'
import { TableShape } from '../../helpers/shapes'
import AverageColumns from '../AverageColumns/AverageColumns'
import { TableRow } from '../TableRow/TableRow'

const Table = (props) => {
  const {
    table,
    showTable
  } = props

  console.log(table)

  return (
    <>
      {showTable && (
        <table className="table table-dark">
          <tbody>
            {table.map((row, rowIndex) => (
              <TableRow
                key={uuidv4()}
                rowIndex={rowIndex}
                row={row}
              />
            ))}
            <AverageColumns />
          </tbody>
        </table>
      )}
    </>
  )
}

Table.propTypes = TableShape.isRequired

const mapStateToProps = (state) => ({
  table: state.table,
  showTable: state.showTable
})

export default connect(mapStateToProps)(Table)
