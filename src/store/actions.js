export const ACTION_TYPES = {
  SET_PARAMS: 'SET::PARAMS',
  SET_TABLE: 'SET::TABLE',
  SET_ROWS: 'SET::ROWS',
  SET_CELLS: 'SET::CELLS',
  SHOW_BUTTONS: 'SHOW::BUTTONS',
  INCREMENT: 'INCREMENT',
  ADD_ROW: 'ADD_ROW',
  REMOVE_ROW: 'REMOVE::ROW'
}

export const setParams = params => ({
  payload: params,
  type: ACTION_TYPES.SET_PARAMS
})

export const setTable = params => ({
  payload: params,
  type: ACTION_TYPES.SET_TABLE
})

export const setRows = params => ({
  payload: params,
  type: ACTION_TYPES.SET_ROWS
})

export const setCells = params => ({
  payload: params,
  type: ACTION_TYPES.SET_CELLS
})

export const setShowButtons = params => ({
  payload: params,
  type: ACTION_TYPES.SHOW_BUTTONS
})

export const increment = params => ({
  type: ACTION_TYPES.INCREMENT,
  payload: params
})

export const setNewRow = params => ({
  type: ACTION_TYPES.ADD_ROW,
  payload: params
})

export const removeRow = params => ({
  type: ACTION_TYPES.REMOVE_ROW,
  payload: params
})
