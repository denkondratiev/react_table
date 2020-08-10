import {
  ACTION_TYPES,
  Params,
  RowsParams,
  CellsParams,
  NewRowsParams
} from './types'

export const setParams = (params: Params) => ({
  payload: params,
  type: ACTION_TYPES.SET_PARAMS
})

export const setTable = (params: Array<string>) => ({
  payload: params,
  type: ACTION_TYPES.SET_TABLE
})

export const setRows = (params: RowsParams) => ({
  payload: params,
  type: ACTION_TYPES.SET_ROWS
})

export const setCells = (params: CellsParams) => ({
  payload: params,
  type: ACTION_TYPES.SET_CELLS
})

export const setShowButtons = (params: boolean) => ({
  payload: params,
  type: ACTION_TYPES.SHOW_BUTTONS
})

export const increment = (params: string) => ({
  payload: params,
  type: ACTION_TYPES.INCREMENT
})

export const setNewRow = (params: NewRowsParams) => ({
  payload: params,
  type: ACTION_TYPES.ADD_ROW
})

export const removeRow = (params: any) => ({
  payload: params,
  type: ACTION_TYPES.REMOVE_ROW
})
