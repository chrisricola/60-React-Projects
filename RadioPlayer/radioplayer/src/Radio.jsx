import React, { useEffect, useState } from 'react';
import { RadioBrowserApi } from "radio-browser-api";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import img from "./radio-cassette-gd2eb80778_1280.png";

const Radio = () => {

    const [stationType, setStationType] = useState("all");
    const [stations, setStation] = useState();

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

    const setImage = event => {
        event.target.src = img
    }

  return (
    <div>
        <div>
            {types.map((type, index)=> (
                <span key={index} onClick={() => setStationType}>
                    <button className='btn btn-primary'>{type}</button>
                </span>
            ))}
        </div>
        <div>
            <div className="row">
                {
                    stations && stations.map((station, index) => {
                        return (
                            <div className='col col-lg-3 col-md-6 col-sm-12' key={index}>
                                <div className="card">
                                    <img style={{width:80, height: 80}} className='card-img-top' src={station.favicon} alt="" onError={setImage}/>    
                                    <div className="card-header">
                                        <h6>{station.name}</h6>
                                    </div>
                                    <AudioPlayer className='player' src={station.urlResolved} 
                                    showJumpControls={false}
                                    layout='stacked'
                                    customProgressBarSection={[]}
                                    customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
                                    autoPlayAfterSrcChange={false}
                                 />
                                 </div>
                                 
                            </div>
                        )
                    })
                }
            </div>
        </div>

    </div>
  )
}

export default Radio;