import React, { useState } from 'react'
import '../index.css'

const Hero = ({setSearch}) => {

  const [name, setName] = useState("");

  const searchNews = () => {
    setSearch(name);
}
  return (
    <div>
        <header>
            <div className="hero">
                <div className="hero-banner">
                    <h4>News Store</h4>
                    <p>All new news is an old news happening to new people</p>
                    <input type='text' placeholder='' className='input-bar' onChange={(e)=>{setName(e.target.value)}}/>
                    <button className='hero-btn'onClick={searchNews}>Search</button>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Hero