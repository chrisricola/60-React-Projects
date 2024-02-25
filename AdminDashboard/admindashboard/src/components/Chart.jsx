import React, { useState } from 'react'
import { UserData } from '../Data';
import Barchart from './Barchart';
import { Card, Stack } from '@mui/material';
import PieChart from './PieChart';

const Chart = () => {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
        
            {
                label: "User Gained",
                data: UserData.map((data) => data.Gain),
                backgroundColor: [
                    "#fff",
                    "#ffe3a3",
                    "#ffd166",
                    "#ffda85",
                    "#cca752"
                ],
                borderColor: "white",
                borderWidth: 2,
                color: "white",
            },
        ],
    });

    const [userData2, setUserData2] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
        
            {
                label: "User Lost",
                data: UserData.map((data) => data.Lost),
                backgroundColor: [
                    "#fff",
                    "#ffe3a3",
                    "#ffd166",
                    "#ffda85",
                    "#cca752"
                ],
                borderColor: "white",
                borderWidth: 2,
                color: "white",
            },
        ],
    });
    

  return (
    <div>
        <Stack direction={"row"} spacing={4}>
            <Card sx={{width: 310, backgroundColor: "#21295c"}}>
                <div style={{width: 300, padding: 5}}>
                <Barchart chartData={userData}/>
                </div>
            </Card>
            <Card sx={{width: 310, backgroundColor: "#21295c"}}>
                <div style={{width: 300, padding: 5}}>
                <Barchart chartData={userData2}/>
                </div>
            </Card>
            <Card sx={{width: 310, backgroundColor: "#21295c"}}>
                <div style={{width: 300, padding: 5}}>
                <PieChart chartData={userData}/>
                </div>
            </Card>
            
        </Stack>
    </div>
    
  )
}

export default Chart