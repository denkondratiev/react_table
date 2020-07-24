export const ACTION_TYPES = {
  SET_COLUMNS: 'SET::COLUMNS',
  SET_ROWS: 'SET::ROWS',
  SET_TABLE: 'SET::TABLE',
  SET_HIGHLIGHTS: 'SET::HIGHLIGHTS',
  SET_SHOW_TABLE: 'SET::SHOW::TABLE',
  SET_SHOW_BUTTONS: 'SET::SHOW::BUTTONS',
  INCREMENT: 'INCREMENT',
  SET_LIGHT_CELLS: 'SET_LIGHT_CELLS'
}

export const setColumns = (param) => ({
  payload: param,
  type: ACTION_TYPES.SET_COLUMNS
})

export const setRows = (param) => ({
  payload: param,
  type: ACTION_TYPES.SET_ROWS
})

export const setHighlights = (param) => ({
  payload: param,
  type: ACTION_TYPES.SET_HIGHLIGHTS
})

export const setTable = (param) => ({
  payload: param,
  type: ACTION_TYPES.SET_TABLE
})

export const setShowTable = (param) => ({
  payload: param,
  type: ACTION_TYPES.SET_SHOW_TABLE
})

export const setShowButtons = (param) => ({
  payload: param,
  type: ACTION_TYPES.SET_SHOW_BUTTONS
})

export const increment = (id, cellIndex) => ({
  payload: { id, cellIndex },
  type: ACTION_TYPES.INCREMENT
})

export const setLightCells = (id, cellIndex, amount, highlights) => ({
  payload: { id, cellIndex, amount, highlights },
  type: ACTION_TYPES.SET_LIGHT_CELLS
})
