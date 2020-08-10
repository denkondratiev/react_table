import React from 'react'
import { Provider } from 'react-redux'
import Form from '../Form/Form'
import { act, create } from 'react-test-renderer'
import { createStore } from 'redux'
import { rootReducer } from '../../store/reducers'

describe('testing form methods', () => {
  const store = createStore(rootReducer)
  let component

  act(() => {
    component = create(
      <Provider store={store}>
        <Form />
      </Provider>
    )
  })
  const root = component.root

  it('should correct render initial form', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('typed to form input', () => {
    const name = 'rowsAmount'
    const input = root.findByProps({ name })
    const event = { currentTarget: { name, value: 2 } }

    act(() => input.props.onChange(event))

    expect(component.toJSON()).toMatchSnapshot()
  })

  it('form submit', () => {
    const form = root.findByProps({ id: 'form' })
    const withPrevent = { preventDefault: jest.fn() }

    act(() => form.props.onSubmit(withPrevent))

    expect(component.toJSON()).toMatchSnapshot()
  })
})
