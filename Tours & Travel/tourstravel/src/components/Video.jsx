import React from 'react'
import video1 from '../images/sea-24216.mp4'
import ReactPlayer from 'react-player/lazy'

const Video = () => {
  return (
    <div className='video'>
        <h4>Tours</h4>
        <div className="player">
            <ReactPlayer controls url={video1} />
            <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, inventore!</p>
            <button className="hero-btn btn-3">Visit</button>
            <div />
        </div>
    </div>
  )
}

export default Video