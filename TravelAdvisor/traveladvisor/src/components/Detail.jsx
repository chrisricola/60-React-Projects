import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { Box, Paper, Stack } from '@mui/material'


const Detail = ({ places }) => {

    const params = useParams();
    console.log(places)
    const longitude = places.lon;
    const latitude = places.lat;
    const [info, setInfo] = useState([]);

    const getInfo = (name) => {
        axios.get('https://api.opentripmap.com/0.1/en/places/autosuggest?name=' + params.name + '&radius=5000&lon=' + longitude + '&lat=' + latitude + '&apikey=5ae2e3f221c38a28845f05b649c38ac31d9a5ae3fe7266b2bfc87c36')
            .then(res => setInfo(res.data.features))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getInfo(params.name);
    });
    console.log(info);

  return (
        <Box sx={{margin: 5}}>
            <Stack spacing={2} justifyContent={"space-between"}>
                <Box flex={5}></Box>
                <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
                    <Box flex={2}>
                        
                    </Box>
                    <Box flex={5} sx={{backgroundColor: "#24404b"}}>
                        sirski
                    </Box>
                    <Box flex={2}>
                        
                    </Box>
                </Stack>
            </Stack>
        </Box>  
  )
}

export default Detail