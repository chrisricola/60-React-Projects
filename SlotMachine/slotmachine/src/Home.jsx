import React from 'react'
import {Box, Stack} from '@mui/material';
import img from '../src/images/slot2.jpg';
import list from './list'

const Home = () => {
  return (
    <div>
        <Box>
            <Stack direction={"row"}>
              <Box flex={2} sx={{backgroundClip: "rgb(8, 195, 161)"}} />
              <Box flex={2} sx={{textAlign: "center"}}>
                <Stack direction={"column"} >
                  <Box sx={{postion:"relative"}}>
                    <img src={img} alt="" />
                    <img src={list[0]} alt="" />
                    <img src={list[0]} />
                    <img src={list[0]} alt="" />
                  </Box>
                  <Box>
                    <span className='dollar'>$</span>
                    <input type='text' placeholder='' />
                  </Box> 
                  <button>Start</button>
                </Stack>
              </Box>
              <Box flex={2} sx={{backgroundClip: "rgb(8, 195, 161)"}} />
            </Stack>
        </Box>
    </div>
  )
}

export default Home