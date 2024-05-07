import React, { useEffect, useState } from 'react'

const Main = () => {
    const [characters, setCharacters] = useState([]);
    const [offset, setOffset] = useState(0);
    const getCharacter = async () => {
        const api = await fetch("https://pokeapi.co/api/v2/pokemon?offset=" + offset + "&limit=20");

        const data = await api.json();

        console.log(data.results);
        setCharacters(data.results);
    }

    useEffect(() => {
        getCharacter();
    })
  return (
    <div>
      <div className="row">
        {
          characters.map((item, id) =>(
            <div className='col-lg-4 col-md-6 col-sm-12'> 
            <div className="card">
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id+1+offset}.svg`} alt='' />
              <div className="card-body">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id+1+offset}.png`} alt='' />
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id+1+offset}.png`} alt='' />
                <h6>{item.name}</h6>
                <button className='btn btn-success'>More</button>
              </div>
            </div>
            </div> 
          ))
        }
      </div>
      <button className='btn btn-success' onClick={() => setOffset(offset - 20)}>Prev</button>
      <button className='btn btn-success' onClick={() => setOffset(offset + 20)}>Next</button>
    </div>
  )
}

export default Main