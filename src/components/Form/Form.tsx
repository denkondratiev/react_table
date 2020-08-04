import React, { useState } from 'react'
import { generateTable } from '../../helpers/generate'
import { useDispatch, batch } from 'react-redux'
import './Form.css'
import {
  setParams,
  setTable,
  setRows,
  setCells,
  setShowButtons
} from '../../store/actions'

type InputValue = {
  rowsAmount: string,
  columnsAmount: string,
  lightsAmount: string
}

type ErrorValue = {
  rowsAmount: boolean,
  columnsAmount: boolean,
  lightsAmount: boolean
}

const Form: React.FC = () => {
  const dispatch = useDispatch()

  const [inputValue, setInputValue] = useState<InputValue>({
    rowsAmount: '',
    columnsAmount: '',
    lightsAmount: ''
  })

  const [error, setError] = useState<ErrorValue>({
    rowsAmount: false,
    columnsAmount: false,
    lightsAmount: false
  })

  const handleGenerateTable = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const rowsAmount = inputValue.rowsAmount
    const columnsAmount = inputValue.columnsAmount
    const lightsAmount = inputValue.lightsAmount

    if (Number(rowsAmount) > 0 && Number(columnsAmount) > 0 && Number(lightsAmount) > 0) {
      const { table, rows, cells } = generateTable(rowsAmount, columnsAmount)

      batch(() => {
        dispatch(setParams({ rowsAmount, columnsAmount, lightsAmount }))
        dispatch(setTable(table))
        dispatch(setRows(rows))
        dispatch(setCells(cells))
        dispatch(setShowButtons(true))
      })

      setInputValue({
        rowsAmount: '',
        columnsAmount: '',
        lightsAmount: ''
      })
    }

    setError({
      rowsAmount: !!((!rowsAmount || Number(rowsAmount) <= 0)),
      columnsAmount: !!((!columnsAmount || Number(columnsAmount) <= 0)),
      lightsAmount: !!((!lightsAmount || Number(lightsAmount) <= 0))
    })
  }

  const onChangeHandler = (event: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = event.currentTarget

    setError({ ...error, [name]: false })
    setInputValue({ ...inputValue, [name]: value })
  }

  return (
    <form
      id="form"
      className="form"
      onSubmit={(event) => handleGenerateTable(event)}>
      {
        error.rowsAmount && (
          <div>
              Please add correct rows value
          </div>
        )
      }
      <input
        type="number"
        name="rowsAmount"
        className={`form-control ${error.rowsAmount && 'error'}`}
        placeholder="Rows..."
        onChange={(event) => onChangeHandler(event)}
        value={inputValue.rowsAmount}
      />
      {
        error.columnsAmount && (
          <div>
              Please add correct columns value
          </div>
        )
      }
      <input
        type="number"
        name="columnsAmount"
        className={`form-control ${error.columnsAmount && 'error'}`}
        placeholder="Columns..."
        onChange={(event) => onChangeHandler(event)}
        value={inputValue.columnsAmount}
      />
      {
        error.lightsAmount && (
          <div>
              Please add correct highlight value
          </div>
        )
      }
      <input
        type="number"
        name="lightsAmount"
        className={`form-control ${error.lightsAmount && 'error'}`}
        placeholder="Highlight cells..."
        onChange={(event) => onChangeHandler(event)}
        value={inputValue.lightsAmount}
      />
      <button
        id ="button-generate"
        type="submit"
        className="btn btn-dark"
      >
        Generate
      </button>
    </form>
  )
}

export default Form
