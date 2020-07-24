import { createStore } from 'redux'
import { ACTION_TYPES } from './actions'

function rootReducer (state, action) {
  const {
    SET_COLUMNS,
    SET_ROWS,
    SET_HIGHLIGHTS,
    SET_TABLE,
    SET_SHOW_TABLE,
    SET_SHOW_BUTTONS,
    INCREMENT,
    SET_LIGHT_CELLS
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
        columns: action.payload === '' ? '' : Number(action.payload)
      }
    }

    case SET_ROWS: {
      return {
        ...state,
        rows: action.payload === '' ? '' : Number(action.payload)
      }
    }

    case SET_HIGHLIGHTS: {
      return {
        ...state,
        highlights: action.payload === '' ? '' : Number(action.payload)
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

    case INCREMENT: {
      state.table.splice(action.payload.id, 1, [...state.table[action.payload.id]
        .map((item, index) => index !== action.payload.cellIndex
          ? item
          : {
            ...state.table[action.payload.id][action.payload.cellIndex],
            amount: state.table[action.payload.id][action.payload.cellIndex].amount + 1
          })
      ])
      const newTable = [...state.table]
      return {
        ...state,
        table: newTable
      }
    }

    case SET_LIGHT_CELLS: {
      // const amount = action.payload.amount
      // const highlights = action.payload.highlights
      const rowId = action.payload.id
      const cellIndex = action.payload.cellIndex
      // const col = state.table.flat().length / state.table.length
      console.log(rowId, cellIndex)
      break

      // const lightArray = [...state.table].flat().map((item, index) => ({
      //   ...item,
      //   rowIndex: index,
      //   difference: Math.abs(item.amount - amount)
      // })).sort((a, b) => a.difference - b.difference).slice(0, highlights + 1)

      // state.table.map(cell => (
      //   lightArray.some(lightCell => lightCell.cellId === cell.cellId)
      //     ? { ...cell, isLight: true }
      //     : cell
      // ))

      // return {
      //   ...state,
      //   table: newTable
      // }
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
