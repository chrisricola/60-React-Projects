import React from 'react'
import {Box, Stack} from '@mui/material'
import ProfileCard from './ProfilCard'
import MediaControlCard from './MediaControlCard'
import ProgressLine from './ProgressLine'
import img1 from '../hosting.png'
import img2 from '../money-bag.png'
import img3 from '../user.png'



const Feed = () => {
  return (
    <Box flex={5} p={2}>
      <Stack spacing={4}>
        <Stack direction={"row"} spacing={4}>
          <ProfileCard bgcolor="#21295c" h1="Used Space" h2="49/60" img={img1} pr="Get More Space"/>
          <ProfileCard bgcolor="#21295c" h1="Revenue" h2="$ 50,345" img={img2} pr="Total Revenue" />
          <ProfileCard bgcolor="#21295c" h1="Users" h2="32.50" img={img3} pr="Total Users" />
          </Stack>
          <Stack direction={"row"} spacing={4}>
            <MediaControlCard />
            <ProgressLine />
          </Stack>
      </Stack>
    </Box>
  )
}

export default Feed