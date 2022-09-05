import './App.css'
import Home from './pages/home'
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Roasters from './pages/roasters'
import Beans from './pages/beans'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roasters" element={<Roasters />} />
        <Route path="/beans" element={<Beans />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
