import React, { useEffect, useState } from 'react'
import Meme from './Meme';

const GetMeme = () => {
    const [meme, setMeme] = useState([]);
    const [show, setShow] = useState(false);
    const [memeData, setMemeData] = useState();

    const getMeme = async () => {
        const api = await fetch("https://meme-api.com/gimme/50")
        const data = await api.json();
        setMeme(data.memes);
        console.log(data.memes);
    }

    useEffect(() => {
        getMeme()
    }, []);
  return (
    <div className='get-meme'>
      {show !== true && 
      <div className="row">
        {
          meme.map((item) => (
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="card">
                <img src={item.preview[2]} alt='' />
                <div className="card-body">
                  <button className='btn btn-info' onClick={() => {setShow(true); setMemeData(item)}}>View</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      }
      {
      show === true && <Meme setShow={setShow} memeData={memeData}/>
    }
    </div>
  )
}

export default GetMeme