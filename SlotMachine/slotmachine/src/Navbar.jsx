import React from 'react'

const Navbar = ({status, profit, loss}) => {
  return (
    <div className='navbar'>
        <h5>Slot Machine</h5>
        <h4>{status}</h4>
        <ul>
            <li>Win ${profit}</li>
            <li>Loss ${loss}</li>
        </ul>
    </div>
  )
}

export default Navbar