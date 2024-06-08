import React from 'react'

const Search = () => {
  return (
    <header>
        <div className="hero">
            <div className="hero-banner">
                <h4>Marvel Heroes</h4>
                <p>With Great Power Comes Great Responsibilty</p>
                <input type='text' placeholder='' className='input-bar' />
                <button className='hero-btn'>Search</button>
            </div>
        </div>
    </header>
  )
}

export default Search;
