import React from 'react'; 
import list from './list';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';




const Drum = ({setName}) => {

  const start = (index) => {
    var sound = new Audio(list[index].audio);
    sound.play();
    setName(list[index].img);
  }

  return (
    <Box sx={{margin: "40px"}}>
      <Stack direction={"row"}>
        {
          list.map((item, index) => (
            <button onClick={() => start(index)} className='btn' key={index} style={{background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${item.img})`}} />
          ))
        }
      </Stack>
    </Box>
  )
}

export default Drum