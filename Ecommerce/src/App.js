import React from 'react'
import './App.css'
import Header from './Components/Header';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from './Components/Checkout';



const App = () => {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Routes>
          <Route path='/checkout' element={<Checkout/>}>
            
          </Route>

          <Route path='/' element={<Home />}>
          </Route>
        </Routes>
      </Router>

      
    </div>
  )
}

export default App