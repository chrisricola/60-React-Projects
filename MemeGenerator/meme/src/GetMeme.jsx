import React, { useEffect, useState } from 'react'

const GetMeme = () => {
    const [meme, setMeme] = useState([]);

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
    <div>

    </div>
  )
}

export default GetMeme