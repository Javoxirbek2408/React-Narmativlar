import React from 'react'
import './App.css'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './layout/Layout'
import { About } from './pages/About'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
