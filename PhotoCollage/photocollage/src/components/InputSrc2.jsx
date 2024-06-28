import React, { useState } from 'react'
import format from './format';
import Image from './Image';

const InputSrc2 = () => {
    const [captions2, setCaptions2] = useState(["", "", "", ""]);

    const col = 2
    const updateCaption = (e, index) => {
        const text = e.target.value || "";
        setCaptions2(
            captions2.map((c, i) => {
                if(index === i){
                    return text
                } else {
                    return c;
                }
            })
        )
    }

    console.log(captions2)
  return (
    <div className='input'>
        {
            format[1].map((c, index) => (
                <input type='text' className='input-bar' onChange={(e) => updateCaption(e, index)} key={index}/>
            ))
        }
        <div>
            <Image captions={captions2} col ={col}/>
        </div>
    </div>
  )
}

export default InputSrc2