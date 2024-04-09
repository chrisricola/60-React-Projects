import React, { useState } from 'react'
import crash from "../images/crash.png";
import '../index.css';
import Drum from './Drum';

const Hero = () => {
  const [name, setName] = useState(crash)
   return (
    <div >
        <div className="container">
            <h1>Drum Band</h1>
        </div>
        <h4>Press any button</h4>
        <img src={name} alt='' className='img' />
        <Drum setName={setName}/>
    </div>
  )
}

export default Hero