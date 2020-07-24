import React, { useState } from 'react'
import { FormShape } from '../../helpers/shapes'
import { generateMatrix } from '../../helpers/helpers'
import { connect } from 'react-redux'
import store from '../../store/reducers'
import './Form.css'
import {
  setColumns,
  setRows,
  setHighlights,
  setTable,
  setShowTable,
  setShowButtons
} from '../../store/actions'

const Form = (props) => {
  const { rows, columns, highlights } = props

  const [isGenerate, setIsGenerate] = useState(false)
  const [error, setError] = useState({
    rows: false,
    columns: false,
    highlights: false
  })

  const handleGenerateTable = (event) => {
    event.preventDefault()

    if (rows && columns && highlights) {
      const matrix = generateMatrix(rows, columns)

      store.dispatch(setTable(matrix))
      store.dispatch(setShowTable(true))
      store.dispatch(setShowButtons(true))

      setIsGenerate(true)
    }

    const errorObj = {
      rows: null,
      columns: null,
      highlight: null
    }

    if (!rows) {
      errorObj.rows = true
    }

    if (!columns) {
      errorObj.columns = true
    }

    if (!highlights) {
      errorObj.highlights = true
    }

    setError({
      rows: errorObj.rows,
      columns: errorObj.columns,
      highlights: errorObj.highlights
    })
  }

  const setColumnsHandler = ({ name, value }) => {
    if (value === '') {
      store.dispatch(setColumns(''))

      return false
    }

    setError({ columns: false })
    store.dispatch(setColumns(value.replace(/[^0-9]/, '')))
  }

  const setRowsHandler = ({ name, value }) => {
    if (value === '') {
      store.dispatch(setRows(''))

      return false
    }

    setError({ rows: false })
    store.dispatch(setRows(value.replace(/[^0-9]/, '')))
  }

  const setHighlightsHandler = ({ name, value }) => {
    if (value === '') {
      store.dispatch(setHighlights(''))

      return false
    }

    setError({ highlights: false })
    store.dispatch(setHighlights(value.replace(/[^0-9]/, '')))
  }

  return (
    <form className="form" onSubmit={(event) => handleGenerateTable(event)}>
      {
        error.rows && (
          <div>
              Please add correct rows value
          </div>
        )
      }
      <input
        type="number"
        name="rows"
        className={`form-control ${error.rows && 'error'}`}
        placeholder="Rows..."
        onChange={(event) => setRowsHandler(event.target)}
        value={isGenerate ? '' : rows}
      />
      {
        error.columns && (
          <div>
              Please add correct columns value
          </div>
        )
      }
      <input
        type="number"
        name="columns"
        className={`form-control ${error.columns && 'error'}`}
        placeholder="Columns..."
        onChange={(event) => setColumnsHandler(event.target)}
        value={isGenerate ? '' : columns}
      />
      {
        error.highlights && (
          <div>
              Please add correct highlight value
          </div>
        )
      }
      <input
        type="number"
        name="highlights"
        className={`form-control ${error.highlights && 'error'}`}
        placeholder="Highlight cells..."
        onChange={(event) => setHighlightsHandler(event.target)}
        value={isGenerate ? '' : highlights}
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

const mapStateToProps = state => ({
  columns: state.columns,
  rows: state.rows,
  highlights: state.highlights
})

export default connect(mapStateToProps)(Form)
