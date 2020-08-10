import React from 'react'
import { ButtonAddShape } from '../../helpers/shapes'

export const ButtonAdd = ({ addRow }) => {
  return (
    <button
      type="button"
      className="btn btn-dark"
      onClick={addRow}
    >
      Add row +
    </button>
  )
}

ButtonAdd.propTypes = ButtonAddShape.isRequired
