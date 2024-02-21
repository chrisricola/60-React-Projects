import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


const SimplePaper = ({img}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper elevation={0} sx={{backgroundColor: "#ffe3a3", textAlign: "center"}}>
      <img src={img} alt="" style={{height: 40, width: 40, marginTop: 20}} />
      </Paper>
    </Box>
  )
}

export default SimplePaper