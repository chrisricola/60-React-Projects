import React from 'react'
import logo from './memeface.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h4>Meme Generator</h4>
        <img src={logo} alt='' className='logo' />
    </div>
  )
}

export default Navbar