import React from 'react'
import store from '../../store/reducers'
import { connect } from 'react-redux'
import { setRows, setTable } from '../../store/actions'
import { randomGenerate } from '../../helpers/helpers'
import { ButtonsShape } from '../../helpers/shapes'
import { ButtonDelete } from '../ButtonDelete/ButtonDelete'
import { ButtonAdd } from '../ButtonAdd/ButtonAdd'
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
          <ButtonDelete deleteRow={deleteRow} />
          <ButtonAdd addRow={addRow} />
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
