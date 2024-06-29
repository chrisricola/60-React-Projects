import React, { useState } from 'react';
import '../index.css';
import InputSrc from './InputSrc';
import InputSrc2 from './InputSrc2';
import InputSrc3 from './InputSrc3';

const Collage = () => {
    const [list, setList] = useState(2);

  return (
    <div style={{width: "50%", margin: "auto"}}>

        <button className='btn btn-info'onClick={() => setList(0)}>2 Photos</button>
        <button className='btn btn-warning' onClick={() => setList(1)}>4 Photos</button>
        <button className='btn btn-danger' onClick={() => setList(2)}>6 Photos</button>

        {list === 0 && <InputSrc list={list} /> }
        {list === 1 && <InputSrc2 list={list} /> }
        {list === 2 && <InputSrc3 list={list} /> }
    </div>
  )
}

export default Collage