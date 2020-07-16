import React, { useState } from 'react'
import { FormShape } from '../../helpers/shapes'
import { randomGenerate } from '../../helpers/helpers'
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

  const [showForm, setShowForm] = useState(true)
  const [error, setError] = useState({ rows: false, columns: false, highlights: false })

  const handleAddData = (event) => {
    event.preventDefault()

    if (rows && columns && highlights) {
      const matrix = [...Array(columns * rows).keys()].map(randomGenerate)

      store.dispatch(setTable(matrix))
      store.dispatch(setShowTable(true))
      store.dispatch(setShowButtons(true))

      setShowForm(false)
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
    setError({ columns: false })
    store.dispatch(setColumns(value.replace(/[^1-9]/, '')))
  }
  const setRowsHandler = ({ name, value }) => {
    setError({ rows: false })
    store.dispatch(setRows(value.replace(/[^1-9]/, '')))
  }
  const setHighlightsHandler = ({ name, value }) => {
    setError({ highlights: false })
    store.dispatch(setHighlights(value.replace(/[^1-9]/, '')))
  }

  return (
    showForm && (
      <form className="form" onSubmit={(event) => handleAddData(event)}>
        {
          error.rows && (
            <div>
              Please add rows value
            </div>
          )
        }
        <input
          type="text"
          name="rows"
          className={`form-control ${error.rows && 'error'}`}
          placeholder="Rows..."
          maxLength="2"
          onChange={(event) => setRowsHandler(event.target)}
          value={rows}
        />
        {
          error.columns && (
            <div>
              Please add columns value
            </div>
          )
        }
        <input
          type="text"
          name="columns"
          className={`form-control ${error.columns && 'error'}`}
          placeholder="Columns..."
          maxLength="2"
          onChange={(event) => setColumnsHandler(event.target)}
          value={columns}
        />
        {
          error.highlights && (
            <div>
              Please add highlight value
            </div>
          )
        }
        <input
          type="text"
          name="highlights"
          className={`form-control ${error.highlights && 'error'}`}
          placeholder="Highlight cells..."
          maxLength="2"
          onChange={(event) => setHighlightsHandler(event.target)}
          value={highlights}
        />
        <button
          type="submit"
          className="btn btn-dark"
        >
          Generate
        </button>
      </form>
    )
  )
}

Form.propTypes = FormShape.isRequired

const mapStateToProps = state => ({
  columns: state.columns,
  rows: state.rows,
  highlights: state.highlights
})

export default connect(mapStateToProps)(Form)
