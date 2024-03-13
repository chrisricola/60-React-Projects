import React from 'react'
import '../index.css'

const Home = () => {
  return (
    <div>
        <header className='hero'>
            <div className="hero-banner">
                <h4>Meal Planner</h4>
                <p>Tell me what you eat, and I will tell you who you are.</p>
                <input className='input-bar' type='text' placeholder='Press Enter' />
            </div>
        </header>
    </div>
  )
}

export default Home