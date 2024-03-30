import React, { useEffect, useState } from 'react';
import { RadioBrowserApi } from "radio-browser-api"

const Radio = () => {

    const [stationType, setStationType] = useState("all");
    const [station, setStation] = useState();

    useEffect(() => {
        setupApi(stationType).then(data => {setStation(data)})
    }, [stationType]);

    const setupApi = async(stationType) => {
        const api = new RadioBrowserApi(fetch.bind(window), "Radio Player");
        const stations = await api.searchStations({
            language: "english", 
            tag: stationType,
            limit: 32
        }).then(data => {
            return data
        });

        return stations
    }

    const types = [
        "all",
        "classical",
        "country",
        "dance",
        "disco",
        "house",
        "jazz",
        "pop",
        "rap",
        "retro",
        "rock"
    ];
  return (
    <div>
        <div>
            {types.map((type, index)=> (
                <span key={index} onClick={() => setStationType}>
                    <button className='btn btn-primary'>{type}</button>
                </span>
            ))}
        </div>
    </div>
  )
}

export default Radio