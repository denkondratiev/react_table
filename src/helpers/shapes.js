import PropTypes from 'prop-types'

export const TableShape = PropTypes.shape({
  rows: PropTypes.number,
  columns: PropTypes.number,
  table: PropTypes.array,
  sumRowArray: PropTypes.number,
  lightsAmount: PropTypes.number
})

export const TableCellShape = PropTypes.shape({
  id: PropTypes.number,
  cell: PropTypes.number,
  amount: PropTypes.number,
  isLight: PropTypes.bool,
  showPercent: PropTypes.bool,
  percent: PropTypes.number,
  incrementCell: PropTypes.func,
  lightArray: PropTypes.array,
  onMouseEnterHandler: PropTypes.func,
  onMouseLeaveHandler: PropTypes.func
})

export const TableCellSumShape = PropTypes.shape({
  id: PropTypes.number,
  rowSum: PropTypes.number,
  onMouseEnterPercent: PropTypes.func,
  onMouseLeavePercent: PropTypes.func
})

export const TableRowShape = PropTypes.shape({
  id: PropTypes.number,
  row: PropTypes.array,
  cells: PropTypes.array,
  rowSum: PropTypes.number,
  lightArray: PropTypes.array,
  onMouseEnterHandler: PropTypes.func,
  onMouseLeaveHandler: PropTypes.func
})

export const AverageRowShape = PropTypes.shape({
  averageArray: PropTypes.array
})

export const FormShape = PropTypes.shape({
  setParamsData: PropTypes.func,
  setTableData: PropTypes.func,
  setRowsData: PropTypes.func,
  setCellsData: PropTypes.func,
  setShowButtonsBoll: PropTypes.func
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
