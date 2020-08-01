import React from 'react'
import { Provider } from 'react-redux'
import TableCell from './TableCell'
import TestRenderer from 'react-test-renderer'
import store from '../../store/store'

it('should correct render table cell with some value', () => {
  const styleString = '#6c757d'

  const tree = TestRenderer
    .create(
      <Provider store={store}>
        <TableCell
          amount={1}
          styleString={styleString}
        />
      </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
