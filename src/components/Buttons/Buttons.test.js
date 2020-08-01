import React from 'react'
import { Provider } from 'react-redux'
import Buttons from '../Buttons/Buttons'
import { create } from 'react-test-renderer'
import store from '../../store/store'

it('should no render when false buttons', () => {
  const tree = create(
    <Provider store={store}>
      <Buttons />
    </Provider>
  )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
