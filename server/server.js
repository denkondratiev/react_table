import express from 'express'
import fs from 'fs'
import path from 'path'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '../src/App'
import { Provider } from 'react-redux'
import store from '../src/store/store'

const app = express()
const PORT = 5000
const router = express.Router()

const serverRendered = (req, res) => {
  const html = ReactDOMServer.renderToString(<Provider store={store}><App /></Provider>)

  fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err)
      return res.status(500).send('Oops, better luck next time!')
    }
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    )
  })
}

router.use('^/$', serverRendered)

app.use(express.static(path.resolve(__dirname, '..', 'build')))

app.listen(PORT, () => {
  console.log(`App launched on port ${PORT}`)
})
