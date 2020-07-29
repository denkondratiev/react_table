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

// TYPES

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
  [name: string]: string
}

export type RowsParams = {
  [name: string]: Array<string>
}

export type CellsParams = {
  [name: string]: { id: string, amount: number }
}


export type NewRowsParams = {
  table: Array<string>
  rows: RowsParams | any
  cells: CellsParams | any
}

// ACTIONS

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
