import React, { useState } from 'react';
import list from './list';

const Dice = ({setInstruction}) => {
  let x = 0, y = 0;

  const [target, setTarget] = useState();
  const [result, setResult] = useState("Roll the Dice");

  const start = () => {
    var number1 = Math.floor(Math.random() * 6);
    document.querySelector('.img1').setAttribute("src", list[number1]);

    var number2 = Math.floor(Math.random() * 6);
    document.querySelector('.img2').setAttribute("src", list[number2]);

    if(number1 + 1 === Number(target)) {
      setResult("Player 1 Wins")
    } else if(number2 + 1 === Number(target)) {
      setResult("Player 2 Wins")
    } else if(number1 === Number(target) && number2 === Number(target)) {
      setResult("Draw")
    }
  }
  return (
    <div className='container'>
        <div>
          <h1>{result}</h1>
          <div className="dice">
            <p>Player 1</p>
            <img className='img1' src={list[x]} alt='' />
          </div>
          <div className="dice">
            <p>Player 2</p>
            <img className='img2' src={list[y]} alt='' />
          </div>
          <h4>Choose A Number</h4>
          
          <input type='text' placeholder='' className='input-bar' onChange={(e) => {setTarget(e.target.value)}}/>
          <br />
          <button className='btn' onClick={() => start()}>Start</button>
          <button className='btn'onClick={() => setInstruction(true)}>Instruction</button>
        </div>
    </div>
  )
}

export default Dice