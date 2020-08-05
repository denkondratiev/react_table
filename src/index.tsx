import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { rootReducer } from './store/reducers'
import { createStore } from 'redux'
// import store from './store/store'
import App from './App'

import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

const preloadedState = (window as any).window.__PRELOADED_STATE__

delete (window as any).window.__PRELOADED_STATE__

const store = createStore (rootReducer, preloadedState)

ReactDOM.hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
