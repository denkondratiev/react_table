import {
  setParams,
  setTable,
  setRows,
  setCells,
  setShowButtons,
  increment,
  setNewRow,
  removeRow
} from './actions'

export const ACTION_TYPES = {
  SET_PARAMS: 'SET::PARAMS',
  SET_TABLE: 'SET::TABLE',
  SET_ROWS: 'SET::ROWS',
  SET_CELLS: 'SET::CELLS',
  SHOW_BUTTONS: 'SHOW::BUTTONS',
  INCREMENT: 'INCREMENT',
  ADD_ROW: 'ADD::ROW',
  REMOVE_ROW: 'REMOVE::ROW'
}

export type State = {
  table: Array<string>
  rows: RowsParams
  cells: CellsParams
  params: Params
  buttons: boolean
}

export type Action = (
  | ReturnType<typeof setParams>
  | ReturnType<typeof setTable>
  | ReturnType<typeof setRows>
  | ReturnType<typeof setCells>
  | ReturnType<typeof setShowButtons>
  | ReturnType<typeof increment>
  | ReturnType<typeof setNewRow>
  | ReturnType<typeof removeRow>
)

export type Params = {
  [name: string]: string | number
}

export type RowsParams = {
  [name: string]: Array<string>
}

export type CellsParams = {
  [name: string]: { id: string, amount: number }
}

export type NewRowsParams = {
  table: Array<string>
  rows: RowsParams
  cells: CellsParams
}
