import React, { useState } from 'react'
import { generateTable } from '../../helpers/generate'
import { useDispatch } from 'react-redux'
import './Form.css'
import {
  setParams,
  setTable,
  setRows,
  setCells,
  setShowButtons,
} from '../../store/actions'

type InputValue = {
  rowsAmount: string,
  columnsAmount: string,
  lightsAmount: string
}

const Form: React.FC = () => {

  const dispatch = useDispatch()

  const [inputValue, setInputValue] = useState<InputValue>({
    rowsAmount: '',
    columnsAmount: '',
    lightsAmount: ''
  })

  const [error, setError] = useState<{ [name: string]: boolean }>({
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

      dispatch(setParams({ rowsAmount, columnsAmount, lightsAmount }))
      dispatch(setTable(table))
      dispatch(setRows(rows))
      dispatch(setCells(cells))
      dispatch(setShowButtons(true))

      setInputValue({
        rowsAmount: '',
        columnsAmount: '',
        lightsAmount: ''
      })
    }

    const errorObj = {
      rowsAmount: false,
      columnsAmount: false,
      lightsAmount: false
    }

    if (!rowsAmount || Number(rowsAmount) <= 0) {
      errorObj.rowsAmount = true
    }

    if (!columnsAmount || Number(columnsAmount) <= 0) {
      errorObj.columnsAmount = true
    }

    if (!lightsAmount || Number(lightsAmount) <= 0) {
      errorObj.lightsAmount = true
    }

    setError({
      rowsAmount: errorObj.rowsAmount,
      columnsAmount: errorObj.columnsAmount,
      lightsAmount: errorObj.lightsAmount
    })
  }

  const onChangeHandler = (event: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = event.currentTarget
    setError({ [name]: false })
    setInputValue({ ...inputValue, [name]: value })
  }

  return (
    <form className="form" onSubmit={(event) => handleGenerateTable(event)}>
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
        type="submit"
        className="btn btn-dark"
      >
        Generate
      </button>
    </form>
  )
}

export default React.memo(Form)
