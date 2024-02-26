import { Card, Paper, Stack } from '@mui/material'
import { Line } from 'rc-progress'
import React from 'react'

const ProgressLine = () => {
  return (
    <Card sx={{width: 650, backgroundColor: "#21295c", color:"f0f0f0"}} disply={{xs: "none", sm: "none", md: "block"}}>
      <Line percent={40} strokeWidth={3} strokeColor={"#cca752"} trailColor={"#ffe3a3"} trailWidth={3} style={{marginTop: 40, marginLeft: 20, marginRight:20,marginBottom:10 }}/>
      <Line percent={80} strokeWidth={3} strokeColor={"#cca752"} trailColor={"#ffe3a3"} trailWidth={3} style={{marginTop: 40, marginLeft: 20, marginRight:20,marginBottom:10 }}/>

      <Stack direction={"row"} gap={12} pl={10} pt={3} pb={0.5} sx={{position: "relative"}}>
        <Paper sx={{width: 30, height: 30, backgroundColor: "#cca752"}}/>
        <h5 style={{position: "absolute", left: "42%", bottom: -17}}>Profit</h5>
        <Paper sx={{width: 30, height: 30, backgroundColor: "#ffe3a3"}}/>
        <h5 style={{position: "absolute", left: "20%", bottom: -17}}>Loss</h5>
      </Stack>
    </Card>
  )
}

export default ProgressLine