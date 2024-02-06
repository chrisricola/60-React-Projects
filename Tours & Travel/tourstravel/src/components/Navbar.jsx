import React from 'react'
import logo from '../images/Home logo.jpg'


const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul>
            <li>Travel</li>
            <li>Billing</li>
        </ul>
    </div>
  )
}

export default Navbar