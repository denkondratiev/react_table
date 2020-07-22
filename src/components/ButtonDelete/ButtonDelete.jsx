import React from 'react'
import { ButtonDeleteShape } from '../../helpers/shapes'

export const ButtonDelete = (props) => {
  const { deleteRow } = props

  return (
    <button
      type="button"
      className="btn btn-dark"
      onClick={deleteRow}
    >
      Delete row -
    </button>
  )
}

ButtonDelete.propTypes = ButtonDeleteShape.isRequired
