import React from 'react'
import store from '../../store/reducers'
import { connect } from 'react-redux'
import { setRows, setTable } from '../../store/actions'
import { randomGenerate } from '../../helpers/helpers'
import { ButtonsShape } from '../../helpers/shapes'
import './Buttons.css'

const Buttons = (props) => {
  const { showButtons, rows, columns, table } = props

  const deleteRow = (event) => {
    if (rows > 1) {
      store.dispatch(setRows(rows - 1))
      store.dispatch(setTable(table.splice(0, table.length - columns)))
    }
  }

  const addRow = (event) => {
    store.dispatch(setRows(rows + 1))

    const newRow = [...Array(columns).keys()].map(randomGenerate)

    store.dispatch(setTable([...table, ...newRow]))
  }

  return (
    <>
      {showButtons && (
        <div className="buttons">
          <button
            type="button"
            className="btn btn-dark"
            onClick={deleteRow}
          >
            Delete row -
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={addRow}
          >
            Add row +
          </button>
        </div>
      )}
    </>
  )
}

Buttons.propTypes = ButtonsShape.isRequired

const mapStateToProps = state => ({
  showButtons: state.showButtons,
  rows: state.rows,
  columns: state.columns,
  table: state.table
})

export default connect(mapStateToProps)(Buttons)
