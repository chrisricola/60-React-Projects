import React from 'react'
import './App.css'
import Header from './Components/Header';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from './Components/Checkout';
import Login from './Components/Login';



const App = () => {
  return (
    <div className='app'>
      <Router>
        <Switch>

          <Route path='/login'>
            <Login />
          </Route>
        
          <Route path='/checkout'>
            <Header />
            <Checkout/>
          </Route>

          <Route path='/'>
            <Header />
            <Home />
          </Route>
      
        </Switch>
      </Router>
    </div>
  )
}

export default App