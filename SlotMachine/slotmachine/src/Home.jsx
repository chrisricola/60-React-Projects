import React, { useState } from 'react'
import { Box, Stack } from '@mui/material';
import img from '../src/images/slot2.jpg';
import list from './list';
import './index.css';

const Home = ({setStatus, setProfit, setLoss, profit, loss}) => {

  const [amount, setAmount] = useState(0);
  const start = () => {
    let secondsRemaining = 20;

    const interval = setInterval(() => {
      var number1 = Math.floor(Math.random() * 6);
      document.querySelector(".img-1").setAttribute('src', list[number1]);

      var number2 = Math.floor(Math.random() * 6);
      document.querySelector(".img-2").setAttribute('src', list[number2]);

      var number3 = Math.floor(Math.random() * 6);
      document.querySelector(".img-3").setAttribute('src', list[number3]);

      if(secondsRemaining === 0) {
        clearInterval(interval);
        if(number1 === number2 && number2 === number3) {
          setStatus("Success");
          setProfit(profit + amount);
        } else {
          setStatus("Loser")
          setLoss(loss + amount)
        }
      }
      secondsRemaining--;
    }, [100])
  }
  return (
    <div>
        <Box>
            <Stack direction={"row"}>
              <Box flex={2} sx={{backgroundClip: "rgb(8, 195, 161)"}} />

              <Box fflex={3} sx={{ textAlign: "center" }}>
                <Stack direction={"column"} >
                  <Box sx={{ position: "relative" }}>
                    <img className='bc' src={img} alt='' />
                    <img className='img-1' src={list[0]} alt=''  />
                    <img className='img-2' src={list[0]} alt='' />
                    <img className='img-3' src={list[0]} alt='' />
                  </Box>
                  <Box sx={{ position: "relative" }}>
                    <span className='dollar'>$</span>
                    <input type='text' placeholder='Amount' className='input'
                    onChange={(e) => setAmount(Number(e.target.value))}
                     />
                  </Box>

                  <button className='btn' onClick={() => start()}>Start</button>

                </Stack>
              </Box>

              <Box flex={2} sx={{backgroundClip: "rgb(8, 195, 161)"}} />

            </Stack>
        </Box>
    </div>
  )
}

export default Home