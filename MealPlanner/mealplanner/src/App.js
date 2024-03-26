import React, { useState } from 'react'
import Home from './components/Home'
import Nav from './components/Nav'

const App = () => {

  const[ protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);
  const [carb, setCarb] = useState(0);
  const [calories, setCalories] = useState(0);

  return (
    <div>
      <Nav protein={protein} fat={fat} carb={carb} calories={calories}/>
      <Home setProtein={setProtein} protein={protein} fat={fat} setFat={setFat} carb={carb} setCarb={setCarb} calories={calories} setCalories={setCalories}/>
    </div>
  )
}

export default App
