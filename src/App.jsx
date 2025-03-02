import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Products from './components/products/Products'
import ContactUs from './components/contact/ContactUs'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/*' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App