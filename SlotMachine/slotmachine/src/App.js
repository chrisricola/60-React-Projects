import React, { useState } from 'react'
import Home from './Home'
import Navbar from './Navbar'
import './index.css'


const App = () => {

  const [status, setStatus] = useState("");
  const [profit, setProfit] = useState(0);
  const [loss, setLoss] = useState(0);
  return (
    <div>
      <Navbar status={status} profit={profit} loss={loss}/>
      <Home setStatus={setStatus} setProfit={setProfit} setLoss={setLoss} profit={profit} loss={loss}/>
    </div>
  )
}

export default App