import React from 'react'
import { connect } from 'react-redux'
import { generateTable } from '../../helpers/generate'
import { ButtonsShape } from '../../helpers/shapes'
import { ButtonDelete } from '../ButtonDelete/ButtonDelete'
import { ButtonAdd } from '../ButtonAdd/ButtonAdd'
import { getColumnsAmount } from '../../helpers/selectors'
import './Buttons.css'
import {
  setNewRow,
  removeRow
} from '../../store/actions'

const Buttons = (props) => {
  const {
    showButtons,
    setNewRow,
    removeRow,
    columnsAmount,
    table
  } = props

  const addRow = () => {
    const { table, rows, cells } = generateTable(1, columnsAmount)
    setNewRow({ table, rows, cells })
  }

  const deleteRow = () => {
    const lastIndex = table[table.length - 1]
    removeRow({ lastIndex })
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
  showButtons: state.buttons,
  columnsAmount: getColumnsAmount(state),
  table: state.table
})

const mapDispatchToProps = dispatch => ({
  setNewRow: (table, rows, cells) => dispatch(setNewRow(table, rows, cells)),
  removeRow: (lastRow) => dispatch(removeRow(lastRow))
})

export default connect(mapStateToProps, mapDispatchToProps)(Buttons)
