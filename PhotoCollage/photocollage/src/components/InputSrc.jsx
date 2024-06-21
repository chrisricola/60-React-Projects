import React, { useState } from 'react'
import photo from './format';

const InputSrc = () => {
    const [captions, setCaptions] = useState(["", ""]);
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
            photo[0].map((e, index) => (
                <input type='text' className='input-bar' onChange={(e) => updateCaption(e, index)}/>
            ))
        }
    </div>
  )
}

export default InputSrc