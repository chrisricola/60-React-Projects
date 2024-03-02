import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Main from './Main'

const Pages = () => {
  return (
    <Route>
        <Routes path="/" element={<Home/>} />
        <Routes path="/:name" element={<Main/>} />
    </Route>
  )
}

export default Pages