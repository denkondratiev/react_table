import express from 'express'
import React from 'react'
import App from '../src/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { rootReducer } from '../src/store/reducers'

import ReactDOMServer from 'react-dom/server'
import path from 'path'
import fs from 'fs'

const app = express()
const PORT = 5000

app.use(express.static(path.resolve(__dirname, '..', 'build')))
// app.use('/static', express.static(path.join(__dirname, 'public')))

function serverRenderer (req, res) {
  const store = createStore(rootReducer)

  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )

  const preloadedState = store.getState()

  fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err)
      return res.status(500).send('Oops, better luck next time!')
    }
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
        .replace('.window.__PRELOADED_STATE__', `window.__PRELOADED_STATE__= ${JSON.stringify(preloadedState)}`)
    )
  })
}

app.use('^/$', serverRenderer)

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
