import React, { useEffect, useState } from 'react'

const Main = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacter();
    }, []);

    const getCharacter = async () => {
        const api  = await fetch('https://thronesapi.com/api/v2/Characters' );
        const data = await api.json();

        setCharacters(data);
    }

    

  return (
    <div>
        {
            characters.map((item) => (
                <><h1>{item.fullName}</h1><img src={item.imageUrl} alt="" /></>
            ))
        }
    </div>
  )
}

export default Main