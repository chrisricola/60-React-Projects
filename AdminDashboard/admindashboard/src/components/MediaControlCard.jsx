import React from 'react'
import { CardMedia, Typography, Stack, Card, CardContent, Box } from '@mui/material'
import { useTheme } from '@emotion/react'


const MediaControlCard = () => {
    const theme = useTheme();

  return (
        <Card sx={{display: 'flex', width: 310, backgroundColor: '#21295c', color: '#fff'}}>
            <Stack spacing={3}>
                <CardMedia sx={{marginLeft: 10}}>
                    <img src='https://mui.com/static/images/avatar/2.jpg' alt='' width={100} height={100} style={{margin: 10}} />
                    <img src='https://mui.com/static/images/avatar/3.jpg' alt='' width={100} height={100} style={{margin: 10}} />
                </CardMedia>
                <Box sx={{display: 'flex', flexDirection: 'column'}} >
                    <CardContent sx ={{flex: '1 2 auto'}}>
                        <Typography component="div" variant='h5'>
                            Top Users
                        </Typography>
                        <Typography variant='subtitle1' color="ffedc2" component="div">
                            Joe John & Samiaya Currin
                        </Typography>
                    </CardContent>
                </Box>
            </Stack>
        </Card>
  )
}

export default MediaControlCard