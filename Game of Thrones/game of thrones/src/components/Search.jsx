import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const Search = () => {
    const params = useParams();

    const [searchedCharacters, setSearchedCharacters] = useState([]);
  const getSearched = async (name) => {

    const api = await fetch(`https://thronesapi.com/api/v2/Characters/${name}`);
    const data = await api.json();
    setSearchedCharacters(data);
  }

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

    const [qoutes, setQoutes] = useState([]);
    
    const getQoutes = async (name) => {
        const url = `https://api.gameofthronesquotes.xyz/v1/author/${name}/2`;
        const input = url.toLowerCase();
        const api  = await fetch(input);
        const data = await api.json();
        setQoutes(data);
    }

    useEffect(() => {
        getQoutes(searchedCharacters.firstName);
    }, [searchedCharacters.firstName]);

  return (
    <div>
        <h1>{searchedCharacters.fullName}</h1>
        <img src={searchedCharacters.imageUrl} alt=""/>
        {
          qoutes.map((item) => {
            return ( <p>{item.sentence}</p>)
          })
        }
    </div>
  )
}

export default Search