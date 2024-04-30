import React, { useEffect, useState } from 'react'

const Main = () => {
    const [characters, setCharacters] = useState([]);
    const getCharacter = async () => {
        const api = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20");

        const data = await api.json();

        console.log(data.results);
        setCharacters(data.results);
    }

    useEffect(() => {
        getCharacter();
    })
  return (
    <div>Main</div>
  )
}

export default Main