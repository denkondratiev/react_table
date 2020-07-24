import PropTypes from 'prop-types'

export const TableShape = PropTypes.shape({
  rows: PropTypes.number,
  columns: PropTypes.number,
  table: PropTypes.array,
  showTable: PropTypes.bool
})

export const TableCellShape = PropTypes.shape({
  id: PropTypes.number,
  amount: PropTypes.number,
  isLight: PropTypes.bool,
  showPercent: PropTypes.bool
})

export const TableRowShape = PropTypes.shape({
  cells: PropTypes.arrayOf(TableCellShape)
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

export const ButtonDeleteShape = PropTypes.shape({
  deleteRow: PropTypes.func
})

export const ButtonAddShape = PropTypes.shape({
  addRow: PropTypes.func
})

export const AverageColumnsShape = PropTypes.shape({
  table: PropTypes.number
})

export const TableSumCellShape = PropTypes.shape({
  table: PropTypes.number,
  columns: PropTypes.number,
  cellValue: PropTypes.number,
  rowSum: PropTypes.number
})
