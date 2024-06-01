import React, { useEffect, useState } from 'react'

const Marvel = () => {
    const [characters, setCharaters] = useState([]);

    const getCharacter = async () => {
        const api = await fetch("https://gateway.marvel.com/v1/public/characters?nameStartsWith=spider&ts=1&apikey=60c5976a669d2106e5bf80446a9db36e&hash=6d23d1f44afe66c5e086c31958a0d845");
        const data = await api.json();
        setCharaters(data.data.results)
        console.log(data.data.results)
    }

    useEffect(() => {
        getCharacter();
    }, [])
  return (
    <div>Marvel</div>
  )
}

export default Marvel