import React from 'react'

const Home = () => {
  return (
    <div>
        <header>
            <div className="hero">
                <div className="hero-banner">
                    <h4>Travel Advisor</h4>
                    <p>The journey of a thousand miles begins with a single step</p>
                    <input type="text" placeholder='' className='input-bar'/>
                    <button className='hero-btn'>Search</button>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Home