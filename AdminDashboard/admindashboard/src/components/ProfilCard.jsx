import React from 'react'
import {Card, Divider, Stack, Typography} from '@mui/material'
import SimplePaper from './SimplePaper'

const ProfilCard = () => {
  return (
    <Card sx={{width: 310, height: 150, position: "relative"}}>
        <Stack>
            <Stack direction={"row"}>
                <SimplePaper elevation={3} img="" />
                <Stack>
                  <Typography variant='subtitle1' color="white" component="div" sx={{position: "absolute", right: 50, marginTop: 2}}>
                    jshsh
                  </Typography>
                  <Typography variant='h5' color="#ffedc2" component="div" sx={{position: "absolute", right: 50, marginTop: 6}}>
                    jshsh
                  </Typography>
                </Stack>
            </Stack>
            <Divider variant='middle' sx={{color: "#fff"}} />
            <p style={{fontSize: 13, position:"absolute", marginTop: 125, left: 100}}>Leggo</p>
        </Stack>
    </Card>
  )
}

export default ProfilCard