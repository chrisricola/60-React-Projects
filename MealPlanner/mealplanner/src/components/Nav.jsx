import React from 'react'
import "../index.css"

const Nav = ({protein, fat, calories, carb}) => {
  return (
    <div className='navbar'>
        <span>Calories: {calories}</span>
        <ul>
            <li>Fat: {fat}</li>
            <li>Carb: {carb}</li>
            <li>Protein: {protein} g</li>
        </ul>
    </div>
  )
}

export default Nav