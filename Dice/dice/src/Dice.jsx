import React from 'react';
import list from './list';

const Dice = () => {
  let x = 0, y = 0;
  const start = () => {
    var number1 = Math.floor(Math.random() * 6);
    document.querySelector('.img1').setAttribute("src", list[number1]);

    var number2 = Math.floor(Math.random() * 6);
    document.querySelector('.img2').setAttribute("src", list[number2]);
  }
  return (
    <div className='container'>
        <div>
          <h1>Player 1 wins</h1>
          <div className="dice">
            <p>Player 1</p>
            <img className='img1' src={list[x]} alt='' />
          </div>
          <div className="dice">
            <p>Player 1</p>
            <img className='img2' src={list[y]} alt='' />
          </div>
          <h4>Choose A Number</h4>
          <input type='text' placeholder='' className='input-bar' />
          <button className='btn' onClick={() => start()}>Start</button>
          <button className='btn'>Instruction</button>
        </div>
    </div>
  )
}

export default Dice