import { combineReducers } from 'redux'
import { ACTION_TYPES } from './actions'
import { Action, Params, RowsParams, CellsParams } from './actions'

const paramsReducer = (state: Params = {}, action: Action): Params => {
  const { SET_PARAMS } = ACTION_TYPES

  switch (action.type) {
    case SET_PARAMS:
      return action.payload
    default:
      return state
  }
}

function tableReducer (state: Array<string> = [], action: Action): Array<string> {
  const { SET_TABLE, ADD_ROW, REMOVE_ROW } = ACTION_TYPES

  switch (action.type) {
    case SET_TABLE:
      return action.payload
    case ADD_ROW:
      return [...state, action.payload.table]
    case REMOVE_ROW:
      return state.filter(id => id !== action.payload.lastRow)
    default:
      return state
  }
}

const rowsReducer = (state: RowsParams = {}, action: Action): RowsParams => {
  const { SET_ROWS, ADD_ROW, REMOVE_ROW } = ACTION_TYPES

  switch (action.type) {
    case SET_ROWS:
      return action.payload
    case ADD_ROW:
      return { ...state, ...action.payload.rows }
    case REMOVE_ROW:
      delete state[action.payload.lastRow]
      return state
    default:
      return state
  }
}


const cellsReducer = (state: CellsParams = {}, action: Action): CellsParams => {
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

const buttonsReducer = (state: boolean = false, action: Action): boolean => {
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
