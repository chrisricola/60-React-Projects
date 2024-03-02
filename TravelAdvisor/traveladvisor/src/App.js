import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import './index.css'

const App = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
}

export default App
