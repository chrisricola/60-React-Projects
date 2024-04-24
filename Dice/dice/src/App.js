import React, { useState } from 'react'
import Dice from './Dice'
import Info from './Info';

const App = () => {

  const [instruction, setInstruction] = useState(false);

  return (
    <div>
      {
        !instruction ? <Dice setInstruction={setInstruction}/> : <Info setInstruction={setInstruction}/>
      }
    </div>
  )
}

export default App
