import {
  setParams,
  setTable,
  setRows,
  setCells,
  setShowButtons,
  increment,
  setNewRow,
  removeRow
} from '../actions'
import * as types from '../types'

describe('actions', () => {
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
  // END STORE

  test('should create action SET_PARAMS', () => {
    const expectedAction = {
      payload: params,
      type: types.ACTION_TYPES.SET_PARAMS
    }

    expect(setParams(params)).toEqual(expectedAction)
  })

  test('should create action SET_TABLE', () => {
    const params = table
    const action = {
      payload: params,
      type: types.ACTION_TYPES.SET_TABLE
    }

    expect(setTable(params)).toEqual(action)
  })

  test('should create action SET_ROWS', () => {
    const params = rows
    const action = {
      payload: params,
      type: types.ACTION_TYPES.SET_ROWS
    }

    expect(setRows(params)).toEqual(action)
  })

  test('should create action SET_CELLS', () => {
    const params = cells
    const action = {
      payload: params,
      type: types.ACTION_TYPES.SET_CELLS
    }

    expect(setCells(params)).toEqual(action)
  })

  test('should create action SHOW_BUTTONS', () => {
    const params = buttons
    const action = {
      payload: params,
      type: types.ACTION_TYPES.SHOW_BUTTONS
    }

    expect(setShowButtons(params)).toEqual(action)
  })

  test('should create action INCREMENT', () => {
    const params = 'somecell1'
    const action = {
      payload: params,
      type: types.ACTION_TYPES.INCREMENT
    }

    expect(increment(params)).toEqual(action)
  })

  test('should create action ADD_ROW', () => {
    const rows = 1
    const params = { table, rows, cells }
    const action = {
      payload: params,
      type: types.ACTION_TYPES.ADD_ROW
    }

    expect(setNewRow(params)).toEqual(action)
  })

  test('should create action REMOVE_ROW', () => {
    const lastRowKey = 'row2'
    const columnsAmount = 2
    const params = { lastRowKey, columnsAmount }
    const action = {
      payload: params,
      type: types.ACTION_TYPES.REMOVE_ROW
    }

    expect(removeRow(params)).toEqual(action)
  })
})
