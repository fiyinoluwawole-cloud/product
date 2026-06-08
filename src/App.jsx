import React from 'react'
import{Route, Routes} from 'react-router-dom'
import Products from './components/Product'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ProductDetails from './components/ProductDetails'


const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
    </Routes>

    </>
  )
}

export default App
