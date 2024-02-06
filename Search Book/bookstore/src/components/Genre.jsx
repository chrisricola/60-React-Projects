import React, { useState } from 'react'
import img from '../images/bookdesk1.jpg'
import img1 from '../images/bookdesk1.jpg'
import img2 from '../images/bookdesk2.jpg'
import img3 from '../images/bookdesk3.jpg'
import img5 from '../images/bookdesk5.jpg'
import { useNavigate } from 'react-router-dom'

const Genre = () => {
  const navigate =useNavigate();
  const [name, setName] = useState('');
  return (
    <div className="body">
      <div>
        <input type="text" onChange={(e) => {setName(e.target.value)}}/>
        <button className='hero-btn' onClick={() => navigate('/genre/' + name)}>Search</button>
      </div>
      <div className="main">
        <div className="genre1">
          <img src={img} alt='' title='Love'onClick={() => navigate('/genre/love')}/>
          <img src={img2} alt='' title='Drama' onClick={() => navigate('/genre/drama')}/>
          <img src={img1} alt='' title='Action' onClick={() => navigate('/genre/action')}/>
          <img src={img3} alt='' title='Adventure' onClick={() => navigate('/genre/adventure')}/>
          <img src={img5} alt='' title='History' onClick={() => navigate('/genre/history')}/>
          <img src={img1} alt='' title='Crime' onClick={() => navigate('/genre/crime')}/>
          <img src={img3} alt='' title='Horror' onClick={() => navigate('/genre/horror')}/>
          <img src={img2} alt='' title='Comedy' onClick={() => navigate('/genre/comedy')}/>
        </div>
      </div>
    </div>
  )
}

export default Genre