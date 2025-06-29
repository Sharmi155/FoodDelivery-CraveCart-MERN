import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Placeorder from './pages/Placeorder/Placeorder';
import Home from './pages/Home/Home.jsx';
import Cart from './pages/Cart/Cart';
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup';
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'
const App = () => {
  const[showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin ?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/order' element={<Placeorder />}/>
        <Route path='/verify' element={<Verify />} />
        <Route path='/myorders' element={<MyOrders />} />
      </Routes>
    </div>
    <Footer/>
   </>
  )
}

export default App