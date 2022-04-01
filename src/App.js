import React from 'react'
import Navbar from "./components/Navbar/Navbar"
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import SignUp from './components/pages/SignUp'
import Products from './components/pages/Products'
import ContactUs from './components/pages/ContactUs'
import Services from './components/pages/Services'
import Home from './components/pages/Home'

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='products' element={<Products />} />
          <Route path='contactus' element={<ContactUs />} />
          <Route path='services' element={<Services />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;