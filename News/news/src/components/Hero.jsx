import React from 'react'
import '../index.css'

const Hero = () => {
  return (
    <div>
        <header>
            <div className="hero">
                <div className="hero-banner">
                    <h4>News Store</h4>
                    <p>All new news is an old news happening to new people</p>
                    <input type='text' placeholder='' className='input-bar' />
                    <button className='hero-btn'>Search</button>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Hero