import React from 'react'

const Meme = ({setShow, memeData}) => {
  return (
    <div className='meme'>
        <img src={memeData.preview[2]} alt="" />
        <div className="card-body">
          <button className='btn btn-info' onClick={() => setShow(false)}>Back</button>
        </div>
        
    </div>
  )
}
    
export default Meme;