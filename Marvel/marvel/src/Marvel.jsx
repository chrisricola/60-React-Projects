import React, { useEffect, useState } from 'react'
import Hero from './Hero';


const Marvel = ({search}) => {
    const [characters, setCharaters] = useState([]);
    const [show, setShow] = useState(false);
    const [heroData, setHeroData] = useState();

    const getCharacter = async (search) => {
        const api = await fetch("https://gateway.marvel.com/v1/public/characters?nameStartsWith=" + search + "&ts=1&apikey=60c5976a669d2106e5bf80446a9db36e&hash=6d23d1f44afe66c5e086c31958a0d845");
        const data = await api.json();
        setCharaters(data.data.results)
        console.log(data.data.results)
    }

    useEffect(() => {
        getCharacter(search);
    })
  return (
    <div className='main'>
      {show !== true && 
      <div className="row">
        {
          characters.map((item) => (
            <div className='col-lg-3 com-md-6'>
                <div className="card" styl={{margin: 20}}>
                  <img src={item.thumbnail.path + "." + item.thumbnail.extension} alt='' className='card-image-top' />
                  <h4 className='card-header'>{item.name}</h4>
                  <div className="card-body">
                    <button className='btn btn-danger' onClick={() => {setShow(true); setHeroData(item)}}>View</button>
                  </div>
                </div>
            </div>
          ))
        }
      </div>}
      {show === true && <Hero setShow={setShow} heroData={heroData} />}
    </div>
  )
}

export default Marvel