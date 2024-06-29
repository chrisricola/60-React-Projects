import React, { useState } from 'react';
import '../index.css';
import InputSrc from './InputSrc';
import InputSrc2 from './InputSrc2';
import InputSrc3 from './InputSrc3';

const Collage = () => {
    const [list, setList] = useState(2);

  return (
    <div style={{width: "50%", margin: "auto"}}>

        <button className='btn btn-info'>2 Photos</button>
        <button className='btn btn-warning' >4 Photos</button>
        <button className='btn btn-danger' >6 Photos</button>
    </div>
  )
}

export default Collage