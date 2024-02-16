import React from 'react'
import {Box, Paper, Stack} from "@mui/material"

const Rightbar = () => {
  return (
    <Box flex={1} p={2}>
        <Paper sx = {{height: 50, width: 200}} >
            <Stack direction={"row"} sx={{position:"relative"}} >
                <Paper sx={{height: 40, width: 40}}>
                    <img src="" alt="" style={{height: 40, width: 40}}></img>
                </Paper>
                <h4 style={{position: "absolute", top: -10, left: -60}}>John Doe</h4>
            </Stack>
        </Paper>
    </Box>
  )
}

export default Rightbar