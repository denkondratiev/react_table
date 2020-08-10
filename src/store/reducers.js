import { combineReducers } from 'redux'
import { ACTION_TYPES } from './actions'

const paramsReducer = (state = {}, action) => {
  const { SET_PARAMS } = ACTION_TYPES

  switch (action.type) {
    case SET_PARAMS:
      return action.payload
    default:
      return state
  }
}

function tableReducer (state = [], action) {
  const { SET_TABLE, ADD_ROW, REMOVE_ROW } = ACTION_TYPES

  switch (action.type) {
    case SET_TABLE:
      return action.payload
    case ADD_ROW:
      return [...state, action.payload.table]
    case REMOVE_ROW:
      return state.filter(id => id !== action.payload.lastIndex)
    default:
      return state
  }
}

const rowsReducer = (state = {}, action) => {
  const { SET_ROWS, ADD_ROW, REMOVE_ROW } = ACTION_TYPES

  switch (action.type) {
    case SET_ROWS:
      return action.payload
    case ADD_ROW:
      return { ...state, ...action.payload.rows }
    case REMOVE_ROW:
      delete state[action.payload.lastIndex]
      return state
    default:
      return state
  }
}

const cellsReducer = (state = {}, action) => {
  const { SET_CELLS, INCREMENT, ADD_ROW } = ACTION_TYPES

  switch (action.type) {
    case SET_CELLS:
      return action.payload
    case ADD_ROW:
      return { ...state, ...action.payload.cells }
    case INCREMENT:
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          amount: state[action.payload].amount + 1
        }
      }
    default:
      return state
  }
}

const buttonsReducer = (state = false, action) => {
  const { SHOW_BUTTONS } = ACTION_TYPES

  switch (action.type) {
    case SHOW_BUTTONS:
      return action.payload
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  params: paramsReducer,
  table: tableReducer,
  rows: rowsReducer,
  cells: cellsReducer,
  buttons: buttonsReducer
})
