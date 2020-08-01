import React from 'react'
import { Provider } from 'react-redux'
import App from '../App'
import { act, create } from 'react-test-renderer'
import { createStore } from 'redux'
import { rootReducer } from '../store/reducers'

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

it('should correct render with some values', () => {
  const tree = create(
    <Provider store={store}>
      <App />
    </Provider>
  )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

describe('test cases for buttons', () => {
  let component
  let root

  beforeEach(() => {
    act(() => {
      component = create(
        <Provider store={store}>
          <App />
        </Provider>
      )
    })
    root = component.root
  })

  it('click on button delete', () => {
    const id = 'button-delete'

    const ButtonDelete = root.findByProps({ id })

    act(() => ButtonDelete.props.onClick())

    expect(component.toJSON()).toMatchSnapshot()
  })

  // it('click on button add', () => {
  //   const id = 'button-add'

  //   const ButtonAdd = root.findByProps({ id })

  //   act(() => ButtonAdd.props.onClick())

  //   expect(component.toJSON()).toMatchSnapshot()
  // })
})
