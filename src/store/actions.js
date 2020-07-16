export const ACTION_TYPES = {
  SET_COLUMNS: 'SET::COLUMNS',
  SET_ROWS: 'SET::ROWS',
  SET_TABLE: 'SET::TABLE',
  SET_HIGHLIGHT: 'SET::HIGHLIGHT',
  SET_SHOW_TABLE: 'SET::SHOW::TABLE',
  SET_SHOW_BUTTONS: 'SET::SHOW::BUTTONS'
}

export const setColumns = (param) => ({
  payload: param === '' ? '' : Number(param),
  type: ACTION_TYPES.SET_COLUMNS
})

export const setRows = (param) => ({
  payload: param === '' ? '' : Number(param),
  type: ACTION_TYPES.SET_ROWS
})

export const setHighlights = (param) => ({
  payload: param === '' ? '' : Number(param),
  type: ACTION_TYPES.SET_HIGHLIGHT
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
