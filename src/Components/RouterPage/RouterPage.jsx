import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from "../../Home"
import Products from '../Products/Products'
import About from '../../About'
import Contact from '../../Contact'
import SingleProduct from "../SingleProduct/SingleProduct"
import Cart from "../Cart/Cart"
import ErrorPage from '../../ErrorPage'


const RouterPage = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/singleproduct/:id' element={<SingleProduct />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
    
    </>
  )
}

export default RouterPage