import React from 'react'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
        <header>
            <div className="hero">
                <div className="hero-banner">
                    <h4>Travel & Tours</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, suscipit.</p>
                    <NavLink to={'/travel'}><button className='hero-btn'>Search</button></NavLink>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Hero