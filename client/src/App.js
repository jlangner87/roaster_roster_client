import './App.css'
import Home from './pages/home'
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Roasters from './pages/roasters'

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="roasters" element={<Roasters />} />
      </Routes>
    </div>
  )
}

export default App
