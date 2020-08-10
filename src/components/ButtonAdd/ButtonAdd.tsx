import React from 'react'

interface Props {
  addRow: () => void
}

export const ButtonAdd: React.FC<Props> = ({ addRow }) => {
  return (
    <button
      id ="button-add"
      type="button"
      className="btn btn-dark"
      onClick={addRow}
    >
      Add row +
    </button>
  )
}
