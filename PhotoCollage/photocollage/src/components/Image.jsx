import React from 'react'
import {ImageList, ImageListItem} from '@mui/material'

const Image = ({captions}) => {
  return (
    <div>
        <div>
            <ImageList sx={{ width: 350, height: 450}} cols={2} rowHeight={220}>
                {captions.map((item) => (
                    <ImageListItem key={item.img}>
                        <img src={item} alt="" loading="lazy" />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    </div>
  )
}

export default Image