import React from 'react'
import logo from '../images/logo-book.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul>
            <li>Home</li>
            <li>Genre</li>
        </ul>
    </div>
  )
}

export default Navbar