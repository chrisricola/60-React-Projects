import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import './index.css'
import Pages from './components/Pages'

const App = () => {
  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  )
}

export default App
