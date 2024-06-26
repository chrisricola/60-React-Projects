import React, { useState } from 'react'
import format from './format';
import Image from './Image';

const InputSrc = () => {
    const [captions, setCaptions] = useState(["", "", "", ""]);
    const updateCaption = (e, index) => {
        const text = e.target.value || "";
        setCaptions(
            captions.map((c, i) => {
                if(index === i){
                    return text
                } else {
                    return c;
                }
            })
        )
    }

    console.log(captions)
  return (
    <div className='input'>
        {
            format[1].map((c, index) => (
                <input type='text' className='input-bar' onChange={(e) => updateCaption(e, index)} key={index}/>
            ))
        }
        <div>
            <Image captions={captions} />
        </div>
    </div>
  )
}

export default InputSrc