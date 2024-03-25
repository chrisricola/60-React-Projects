import React from 'react'
import "../index.css"

const Nav = () => {
  return (
    <div className='navbar'>
        <span>Calories: 0</span>
        <ul>
            <li>Fat</li>
            <li>Carb</li>
            <li>Protein</li>
        </ul>
    </div>
  )
}

export default Nav