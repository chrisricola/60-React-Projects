import React, { useState } from 'react'
import { UserData } from '../Data';
import Barchart from './Barchart';

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

  return (
    <Barchart chartData={userData}/>
  )
}

export default Chart