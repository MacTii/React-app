import React, { Fragment } from 'react'
import Navbar from "./components/navbar/Navbar"
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Products from './components/pages/Products'
import ContactUs from './components/pages/ContactUs'
import Services from './components/pages/Services'
import Home from './components/pages/Home'
import Form from './components/pages/signup/Form'

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='services' element={<Services />} />
          <Route path='products' element={<Products />} />
          <Route path='contactus' element={<ContactUs />} />
          <Route path='signup' element={<Form/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;