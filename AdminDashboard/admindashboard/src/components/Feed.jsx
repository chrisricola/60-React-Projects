import React from 'react'
import {Box, Stack} from '@mui/material'
import ProfileCard from './ProfilCard'



const Feed = () => {
  return (
    <Box flex={5} p={2}>
      <Stack spacing={4}>
        <Stack direction={"row"} spacing={4}>
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </Stack>
      </Stack>
    </Box>
  )
}

export default Feed