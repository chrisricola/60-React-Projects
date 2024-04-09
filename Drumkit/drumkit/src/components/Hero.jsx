import React, { useState } from 'react'
import crash from "../images/crash.png";
import '../index.css';

const Hero = () => {
  const [name, setName] = useState(crash)
   return (
    <div >
        <div className="container">
            <h1>Drum Band</h1>
        </div>
        <h4>Press any button</h4>
        <img src={name} alt='' className='img' />
    </div>
  )
}

export default Hero