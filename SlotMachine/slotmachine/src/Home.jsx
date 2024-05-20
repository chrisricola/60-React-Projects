import React from 'react'
import {Box, Stack} from '@mui/material';
import img from '../src/images/slot2.jpg';
import list from './list';
import './index.css';

const Home = () => {
  return (
    <div>
        <Box>
            <Stack direction={"row"}>
              <Box flex={2} sx={{backgroundClip: "rgb(8, 195, 161)"}} />
              <Box flex={3} sx={{textAlign: "center"}}>
                <Stack direction={"column"} >
                  <Box sx={{postion:"relative"}}>
                    <img className='bc' src={img} alt="" />
                    <img className='img-1' src={list[0]} alt="" />
                    <img className='img-2' src={list[0]} />
                    <img className='img-3' src={list[0]} alt="" />
                  </Box>
                  <Box sx={{postion:"relative"}}>
                    <span className='dollar'>$</span>
                    <input type='text' placeholder='' className='input'/>
                  </Box> 
                  <button className='btn'>Start</button>
                </Stack>
              </Box>
              <Box flex={2} sx={{backgroundClip: "rgb(8, 195, 161)"}} />
            </Stack>
        </Box>
    </div>
  )
}

export default Home