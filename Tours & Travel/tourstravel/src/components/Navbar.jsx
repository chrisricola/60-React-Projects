import React from 'react'
import logo from '../images/Home logo.jpg'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='navbar'>
        <NavLink to={'/'}><img src={logo} alt="" /></NavLink>
        <ul>
            <NavLink to={'/travel'} style={{textDecoration: "none", color: "rgb(108,108,108)"}}><li>Travel</li></NavLink>
            <NavLink to={'/pricing'} style={{textDecoration: "none", color: "rgb(108,108,108)"}}><li>Billing</li></NavLink>
        </ul>
    </div>
  )
}

export default Navbar