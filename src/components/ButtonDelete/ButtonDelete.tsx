import React from 'react'

interface Props {
  deleteRow: () => void
}

export const ButtonDelete: React.FC<Props> = (props) => {
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
