import React, { useState } from 'react'
import format from './format';
import Image from './Image';

const InputSrc = ({list}) => {
    const [captions3, setCaptions3] = useState(['', '']);

    const col = 2;

    const updateCaption = (e, index) => {
        const text = e.target.value || "";
        setCaptions3(
            captions3.map((c, i) => {
                if(index === i){
                    return text
                } else {
                    return c;
                }
            })
        )
    }

    console.log(captions3)
  return (
    <div className='input'>
        {
            format[list].map((c, index) => (
                <input type='text' className='input-bar' onChange={(e) => updateCaption(e, index)} key={index}/>
            ))
        }
        <div>
            <Image captions={captions3} col={col}/>
        </div>
    </div>
  )
}

export default InputSrc