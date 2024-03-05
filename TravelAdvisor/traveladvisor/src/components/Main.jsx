import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Main = () => {
    const params = useParams();

    const [places, setPlaces] = useState({});

    const getPlaces = (name) => {
        axios.get('https://api.opentripmap.com/0.1/en/places/geoname?name=' + name + '&apikey=5ae2e3f221c38a28845f05b649c38ac31d9a5ae3fe7266b2bfc87c36')
            .then(res => setPlaces(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getPlaces(params.name);
    });
  return (
    <div>Main</div>
  )
}

export default Main