import React from 'react'
import {Home, Luggage, Man, ModeNightRounded, Pages, Settings} from '@mui/icons-material'
import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch} from '@mui/material'

const Sidebar = ({Setmode, mode}) => {
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
                <ListItem disablePadding>
                    <ListItemButton component="a" href='#home'>
                        <ListItemIcon>
                            <Pages sx={{color: "#ffe3a3"}}/>
                        </ListItemIcon>
                        <ListItemText primary="Pages"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href='#home'>
                        <ListItemIcon>
                            <Luggage sx={{color: "#ffe3a3"}}/>
                        </ListItemIcon>
                        <ListItemText primary="MarketPlace"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href='#home'>
                        <ListItemIcon>
                            <Man sx={{color: "#ffe3a3"}}/>
                        </ListItemIcon>
                        <ListItemText primary="About"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href='#home'>
                        <ListItemIcon>
                            <Settings sx={{color: "#ffe3a3"}}/>
                        </ListItemIcon>
                        <ListItemText primary="Settings"/>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component="a" href='#home'>
                        <ListItemIcon>
                            <ModeNightRounded sx={{color: "#ffe3a3"}}/>
                        </ListItemIcon>
                        <Switch onChange={e=>Setmode(mode === 'light' ? 'dark' : 'light')}/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    </Box>
  )
}

export default Sidebar