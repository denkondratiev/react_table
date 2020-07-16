import PropTypes from 'prop-types'

export const TableShape = PropTypes.shape({
  rows: PropTypes.number,
  columns: PropTypes.number,
  table: PropTypes.array,
  showTable: PropTypes.bool
})

export const FormShape = PropTypes.shape({
  rows: PropTypes.number,
  columns: PropTypes.number,
  highlights: PropTypes.number
})

export const TableItemShape = PropTypes.shape({
  amount: PropTypes.number,
  id: PropTypes.number,
  percent: PropTypes.number,
  table: PropTypes.array,
  highlights: PropTypes.number,
  isLight: PropTypes.bool
})

export const ButtonsShape = PropTypes.shape({
  showButtons: PropTypes.bool,
  rows: PropTypes.number,
  columns: PropTypes.number,
  table: PropTypes.array
})
