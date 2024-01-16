import React from 'react';
import img from "../logo-got.jpg"
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={img} alt="" className='logo' />
        <ul>
            <NavLink to={"/"} style={{textDecoration: 'none', color: "#fff"}}><li>Home</li></NavLink>
            <NavLink to={"/characters"} style={{textDecoration: 'none', color: "#fff"}}><li>Characters</li></NavLink>
        </ul>
    </div>
  )
}

export default Navbar