import { createStore } from 'redux'
import { ACTION_TYPES } from './actions'

function rootReducer (state, action) {
  const {
    SET_COLUMNS,
    SET_ROWS,
    SET_HIGHLIGHT,
    SET_TABLE,
    SET_SHOW_TABLE,
    SET_SHOW_BUTTONS
  } = ACTION_TYPES

  switch (action.type) {
    case SET_TABLE: {
      return {
        ...state,
        table: action.payload
      }
    }

    case SET_COLUMNS: {
      return {
        ...state,
        columns: action.payload
      }
    }

    case SET_ROWS: {
      return {
        ...state,
        rows: action.payload
      }
    }

    case SET_HIGHLIGHT: {
      return {
        ...state,
        highlights: action.payload
      }
    }

    case SET_SHOW_TABLE: {
      return {
        ...state,
        showTable: action.payload
      }
    }

    case SET_SHOW_BUTTONS: {
      return {
        ...state,
        showButtons: action.payload
      }
    }

    default:
      return state
  }
}

const initialState = {
  rows: '',
  columns: '',
  highlights: '',
  table: [],
  showTable: false,
  showButtons: false
}

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
