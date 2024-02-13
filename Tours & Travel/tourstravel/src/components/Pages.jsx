import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import Travel from './Travel'
import Price from './Price'

const Pages = () => {
  return (
    <Routes>
        <Route path='/' and element={<Home/>} />
        <Route path='/travel' and element={<Travel/>} />
        <Route path='/price' and element={<Price/>} />
    </Routes>
  )
}

export default Pages