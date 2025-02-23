import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Cart from './components/Cart';
import Home from './components/Home';
import Header from './components/Header';
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;