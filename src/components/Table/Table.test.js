import React from 'react'
import { create, act } from 'react-test-renderer'
import Table from '../Table/Table'
import TableCellSum from '../TableCellSum/TableCellSum'
import { Provider } from 'react-redux'
import { rootReducer } from '../../store/reducers'
import { createStore } from 'redux'

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

let component
let root

beforeEach(() => {
  act(() => {
    component = create(
      <Provider store={store}>
        <Table />
      </Provider>
    )
  })
  root = component.root
})

it('test should render initial table', () => {
  expect(component.toJSON()).toMatchSnapshot()
})

it('hover on TableCellSum td with row sum', () => {
  const CellSum = root.findAllByType(TableCellSum)

  act(() => CellSum[0].props.onMouseEnterPercent())

  expect(component.toJSON()).toMatchSnapshot()
})

describe('test cases for td cell', () => {
  const id = 'somecell1'
  const event = { currentTarget: { id } }
  let Cell

  beforeEach(() => {
    Cell = root.findByProps({ id })
  })

  it('hover cell', () => {
    act(() => Cell.props.onMouseEnterHandler(event))

    expect(component.toJSON()).toMatchSnapshot()
  })

  it('leave hover cell', () => {
    act(() => Cell.props.onMouseLeaveHandler())

    expect(component.toJSON).toMatchSnapshot()
  })

  it('click cell', () => {
    act(() => Cell.props.onClickIncrement(event))

    expect(component.toJSON()).toMatchSnapshot()
  })
})
