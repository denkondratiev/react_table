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

  // const isInteger = (value) => Math.abs(Math.floor(Number(value)))
  // const number = parseInt(numString, 10);
  // replace(/^[0|\D]*/,'');

  // const checkValue = (value) => (
  //   parseInt(value.trim().replace(/[^0-9]/, ''), 10)
  // )

  // var matrix = new Array(rows).fill(0).map(row => new Array(columns).fill(0));

  const handleAddData = (event) => {
    event.preventDefault()
    console.log(typeof rows, typeof columns, typeof highlights)

    if (rows && columns && highlights) {
      const matrix = []
      for (let i = 0; i < rows; ++i) {
        matrix[i] = []
        for (let j = 0; j < columns; ++j) {
          matrix[i][j] = randomGenerate()
        }
      }

      console.log(matrix)
      // const matrix = [...Array(columns * rows).keys()].map(randomGenerate)

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
    console.log(name, value)

    if (value === '') {
      store.dispatch(setColumns(''))

      return false
    }

    setError({ columns: false })
    store.dispatch(setColumns(value.replace(/[^0-9]/, '')))
  }

  const setRowsHandler = ({ name, value }) => {
    console.log(name, value)

    if (value === '') {
      store.dispatch(setRows(''))

      return false
    }

    setError({ rows: false })
    store.dispatch(setRows(value.replace(/[^0-9]/, '')))
  }

  const setHighlightsHandler = ({ name, value }) => {
    console.log(name, value)

    if (value === '') {
      store.dispatch(setHighlights(''))

      return false
    }

    setError({ highlights: false })
    store.dispatch(setHighlights(value.replace(/[^0-9]/, '')))
  }

  return (
    showForm && (
      <form className="form" onSubmit={(event) => handleAddData(event)}>
        {
          error.rows && (
            <div>
              Please add correct rows value
            </div>
          )
        }
        <input
          type="text"
          name="rows"
          className={`form-control ${error.rows && 'error'}`}
          placeholder="Rows..."
          // maxLength="2"
          onChange={(event) => setRowsHandler(event.target)}
          value={rows}
        />
        {
          error.columns && (
            <div>
              Please add correct columns value
            </div>
          )
        }
        <input
          type="text"
          name="columns"
          className={`form-control ${error.columns && 'error'}`}
          placeholder="Columns..."
          // maxLength="2"
          onChange={(event) => setColumnsHandler(event.target)}
          value={columns}
        />
        {
          error.highlights && (
            <div>
              Please add correct highlight value
            </div>
          )
        }
        <input
          type="text"
          name="highlights"
          className={`form-control ${error.highlights && 'error'}`}
          placeholder="Highlight cells..."
          // maxLength="2"
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
