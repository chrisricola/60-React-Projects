import React from 'react'

const Meme = ({setShow, memeData}) => {
  return (
    <div className='meme'>
        <img src={memeData.preview[2]} alt="" />
        <button className='btn btn-info' onClick={() => setShow(false)}>Back</button>
    </div>
  )
}
    
export default Meme;