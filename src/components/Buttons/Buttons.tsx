import React from 'react'
import { generateTable } from '../../helpers/generate'
import { ButtonDelete } from '../ButtonDelete/ButtonDelete'
import { ButtonAdd } from '../ButtonAdd/ButtonAdd'
import { getColumnsAmount, getTable, getShowButtons } from '../../helpers/selectors'
import './Buttons.css'
import { setNewRow, removeRow } from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'

const Buttons: React.FC = () => {

  const dispatch = useDispatch()

  const columnsAmount = useSelector(getColumnsAmount)
  const showButtons = useSelector(getShowButtons)
  const table = useSelector(getTable)

  const addRow = (): void => {
    const { table, rows, cells } = generateTable(1, columnsAmount)

    dispatch(setNewRow({ table, rows, cells}))
  }

  const deleteRow = (): void => {
    const lastRowKey = table[table.length - 1]

    dispatch(removeRow({ lastRowKey, columnsAmount }))
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

export default Buttons
