import React from 'react'
import crash from "../images/crash.png";

const Hero = () => {
  return (
    <div >
        <div className="container">
            <h1>Drum Band</h1>
        </div>
        <h4>Press any button</h4>
        <img src={crash} alt='' className='img' />
    </div>
  )
}

export default Hero