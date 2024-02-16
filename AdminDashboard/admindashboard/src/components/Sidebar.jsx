import React from 'react'
import Home from '@mui/icons-material'
import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'

const Sidebar = () => {
  return (
    <Box flex={1} p={2}> 
        <Box sx={{position: "fixed", width:"5%"}}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href='#home'>
                        <ListItemIcon>
                            <Home sx={{color: "#ffe3a3"}}/>
                        </ListItemIcon>
                        <ListItemText primary="HomePage"/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    </Box>
  )
}

export default Sidebar