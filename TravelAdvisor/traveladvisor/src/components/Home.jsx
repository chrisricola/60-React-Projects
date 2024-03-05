import React, { useState } from 'react'
import { useNavigate  } from 'react-router-dom'

const Home = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  return (
    <div>
        <header>
            <div className="hero">
                <div className="hero-banner">
                    <h4>Travel Advisor</h4>
                    <p>The journey of a thousand miles begins with a single step</p>
                    <input type="text" placeholder='' className='input-bar'onChange={(e) => setName(e.target.value)}/>
                    <button className='hero-btn' onClick={() => navigate("/" + name)}>Search</button>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Home