import { rootReducer } from '../reducers'
import { createStore } from 'redux'
import * as types from '../types'

describe('reducers test cases', () => {
  // START STORE
  const params = { rowsAmount: 2, columnsAmount: 2, lightsAmount: 2 }
  const table = ['row1', 'row2']
  const rows = {
    row1: ['somecell1', 'somecell2'],
    row2: ['somecell3', 'somecell4']
  }

  const cells = {
    somecell1: { id: 'somecell1', amount: 1 },
    somecell2: { id: 'somecell2', amount: 2 },
    somecell3: { id: 'somecell3', amount: 0 },
    somecell4: { id: 'somecell4', amount: 1 }
  }
  const buttons = true
  const store = createStore(rootReducer, { params, table, rows, cells, buttons })
  // END STORE

  it('should return params', () => {
    const action = {
      payload: params,
      type: types.ACTION_TYPES.SET_PARAMS
    }
    store.dispatch(action)

    expect(store.getState().params).toEqual(params)
  })

  it('should return table', () => {
    const params = table
    const action = {
      payload: params,
      type: types.ACTION_TYPES.SET_TABLE
    }
    store.dispatch(action)

    expect(store.getState().table).toEqual(params)
  })

  it('should return rows', () => {
    const params = rows
    const action = {
      payload: params,
      type: types.ACTION_TYPES.SET_ROWS
    }
    store.dispatch(action)

    expect(store.getState().rows).toEqual(params)
  })

  it('should return cells', () => {
    const params = cells
    const action = {
      payload: params,
      type: types.ACTION_TYPES.SET_CELLS
    }
    store.dispatch(action)

    expect(store.getState().cells).toEqual(params)
  })

  it('should return table without one row', () => {
    const lastRowKey = 'row2'
    const columnsAmount = 2

    const params = { lastRowKey, columnsAmount }
    const action = {
      payload: params,
      type: types.ACTION_TYPES.REMOVE_ROW
    }
    store.dispatch(action)

    expect(Object.keys(store.getState().rows).length).toBe(1)
  })

  it('should return increment table td cell', () => {
    const params = 'somecell1'
    const action = {
      payload: params,
      type: types.ACTION_TYPES.INCREMENT
    }
    store.dispatch(action)

    expect(store.getState().cells[params].amount).toBe(2)
  })
})
