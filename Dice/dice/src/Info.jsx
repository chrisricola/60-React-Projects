import React from 'react'

const Info = ({setInstruction}) => {
  return (
    <div>
        <h1>Instruction</h1>
        <ul>
            <li>This is a two player game</li>
            <li>The two players mutually choose a number</li>
            <li>Then they roll the two dices</li>
            <li>If Player 1 dice number and the choosen number is same then Player 1 wins the game</li>
            <li>If Player 2 dice number and the choosen number is same then Player 2 wins the game</li>
            <li>If both players have a different number nobody wins the game, re-roll the dice</li>
        </ul>
        <button className='btn' onClick={() => setInstruction(false)}>Start</button>
    </div>
  )
}

export default Info