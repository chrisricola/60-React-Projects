import React from 'react'
import {AppBar, Toolbar, Typography, styled, InputBase} from '@mui/material'
import {Pets} from '@mui/icons-material';

const Navbar = () => {
  return (
    <AppBar position='sticky' sx={{backgroundColor: "#21295c", color: "#ffe3a3"}}>
        <StyledToolbar>
            <Typography variant='h6' sx={{display: {xs: 'none', sm:'block'}}}>
                Dashboard
            </Typography>
            <Pets sx={{display: {xs: 'block', sm:'none'}}}/>
            <Search sx={{display: {xs: 'none', sm:'block'}}}>
                <InputBase placeholder='Search'/>
            </Search>
        </StyledToolbar>
    </AppBar>
  )
}

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
});

const Search = styled('div')(({theme}) => ({
    backgroundColor: 'white',
    padding: '0px 10px',
    borderRadius: "5px",
    width: "40%"
}))

export default Navbar