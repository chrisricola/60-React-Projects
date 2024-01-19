import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import Main from './Main'
import Search from './Search'

const Pages = () => {
  return (
    <Routes>
        <Route path='/' and element = {<Header/>} />
        <Route path='/characters' and element={<Main />} />
        <Route path='/Characters/:search' and element={<Search />} />
    </Routes>
  )
}

export default Pages