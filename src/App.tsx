import React from 'react'
import Form from './components/Form/Form'
import Table from './components/Table/Table'
import Buttons from './components/Buttons/Buttons'
import './App.css'

const App: React.FC = () => (
  <div className="main">
    <Form />
    <Buttons />
    <Table />
  </div>
)

export default App
