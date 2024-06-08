import React, { useState } from 'react'

const Search = ({setSearch}) => {

    const [name, setName] =useState("");

    const searchCharacter = () => {
        setSearch(name)
    }
  return (
    <header>
        <div className="hero">
            <div className="hero-banner">
                <h4>Marvel Heroes</h4>
                <p>With Great Power Comes Great Responsibilty</p>
                <input type='text' placeholder='' className='input-bar' onChange={(e) => setName(e.target.value)}/>
                <button className='hero-btn' onClick={searchCharacter}>Search</button>
            </div>
        </div>
    </header>
  )
}

export default Search;
