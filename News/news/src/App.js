import React, { useState } from 'react'
import Hero from './components/Hero'
import Main from './components/Main'
import Catergory from './components/Catergory'

const App = () => {

  const [search, setSearch] = useState("general");

  return (
    <div>
      <Hero />
      <Catergory setSearch={setSearch}/>
      <Main search={search}/>
    </div>
  )
}

export default App


