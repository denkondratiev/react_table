import React, { useState } from 'react'
import { FormShape } from '../../helpers/shapes'
import { generateTable } from '../../helpers/generate'
import { connect } from 'react-redux'
import './Form.css'
import {
  setParams,
  setTable,
  setRows,
  setCells,
  setShowButtons
} from '../../store/actions'

const Form = (props) => {
  const {
    setParamsData,
    setTableData,
    setRowsData,
    setCellsData,
    setShowButtonsBoll
  } = props

  const [inputValue, setInputValue] = useState({
    rowsAmount: '',
    columnsAmount: '',
    lightsAmount: ''
  })

  const [error, setError] = useState({
    rowsAmount: false,
    columnsAmount: false,
    lightsAmount: false
  })

  const handleGenerateTable = (event) => {
    event.preventDefault()

    const rowsAmount = inputValue.rowsAmount
    const columnsAmount = inputValue.columnsAmount
    const lightsAmount = inputValue.lightsAmount

    if (rowsAmount > 0 && columnsAmount > 0 && lightsAmount > 0) {
      const { table, rows, cells } = generateTable(rowsAmount, columnsAmount)

      setParamsData({ rowsAmount, columnsAmount, lightsAmount })
      setTableData(table)
      setRowsData(rows)
      setCellsData(cells)
      setShowButtonsBoll(true)

      setInputValue({
        rowsAmount: '',
        columnsAmount: '',
        lightsAmount: ''
      })
    }

    const errorObj = {
      rowsAmount: null,
      columnsAmount: null,
      lightsAmount: null
    }

    if (!rowsAmount || rowsAmount <= 0) {
      errorObj.rowsAmount = true
    }

    if (!columnsAmount || columnsAmount <= 0) {
      errorObj.columnsAmount = true
    }

    if (!lightsAmount || lightsAmount <= 0) {
      errorObj.lightsAmount = true
    }

    setError({
      rowsAmount: errorObj.rowsAmount,
      columnsAmount: errorObj.columnsAmount,
      lightsAmount: errorObj.lightsAmount
    })
  }

  const onChangeHandler = ({ name, value }) => {
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
        onChange={(event) => onChangeHandler(event.target)}
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
        onChange={(event) => onChangeHandler(event.target)}
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
        onChange={(event) => onChangeHandler(event.target)}
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

Form.propTypes = FormShape.isRequired

const mapDispatchToProps = dispatch => ({
  setParamsData: params => dispatch(setParams(params)),
  setTableData: table => dispatch(setTable(table)),
  setRowsData: rows => dispatch(setRows(rows)),
  setCellsData: cells => dispatch(setCells(cells)),
  setShowButtonsBoll: params => dispatch(setShowButtons(params))
})

export default connect(null, mapDispatchToProps)(Form)
