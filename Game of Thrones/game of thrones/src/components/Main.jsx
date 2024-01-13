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
    <div className='main'>
        <h1 style={{textTransform: 'uppercase', color: 'white'}}>Popular Characters</h1>
        <div className="row">
        {
            
            characters.map((item) => (
                <div className="col-lg-4 col-md-6">
                <div className="project-card">
                    <img src={item.imageUrl} alt="" />
                    <div className="info">
                        <div className="text">
                            <h2>{item.title}</h2>
                            <p className='name'>{item.fullName}</p>
                        </div>
                    </div>
                </div>
                </div>
            ))}
            </div>
    </div>
  )
}

export default Main