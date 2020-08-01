import React from 'react'
import { Provider } from 'react-redux'
import TableRow from './TableRow'
import TestRenderer from 'react-test-renderer'
import { createStore } from 'redux'
import { rootReducer } from '../../store/reducers'

it('should correct render table row with some value', () => {
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
  const buttons = false
  const lightList = ['somecell1', 'somecell2']
  const store = createStore(rootReducer, { params, table, rows, cells, buttons })

  const tree = TestRenderer
    .create(
      <Provider store={store}>
        <TableRow
          row={rows.row1}
          rowSum={3}
          cells={cells}
          lightList={lightList}
        />
      </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
