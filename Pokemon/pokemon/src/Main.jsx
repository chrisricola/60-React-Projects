import React, { useEffect, useState } from 'react';
import './index.css';
import Pokemon from './Pokemon';

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
    });

    const [ability1, setAbility1] = useState("");
    const [ability2, setAbility2] = useState("");
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [img, setImage] = useState("");
    const [className, setClassName] = useState('poke');

    
    const getPoke = async(url) => {
        const api = await fetch(url);
        const pokeData = await api.json();
        console.log(pokeData);
        setAbility1(pokeData.abilities[0].ability.name);
        setAbility2(pokeData.abilities[0].ability.name);
        setHeight(pokeData.height);
        setWeight(pokeData.weight);
        setImage(pokeData.sprites.other.dream_world.front_default);
        setClassName("pokemon");
    }


  return (
    <div>
      <Pokemon ability1={ability1} ability2={ability2} height={height} weigh={weight} img={img} className={className} />
      <div className="row">
        {
          characters.map((item, id) =>(
            <div className='col-lg-3 col-md-6 col-sm-12'> 
            <div className="card">
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id+1+offset}.svg`} alt='' className='card-image-top'/>
              <div className="card-body">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id+1+offset}.png`} alt='' style={{height:100, width:100}}/>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id+1+offset}.png`} alt='' style={{height:100, width:100}}/>
                <h6>{item.name}</h6>
                <button className='btn btn-success' onClick={() => getPoke(item.url)}>More</button>
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