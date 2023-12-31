import React, { useState } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Address from './components/Address';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import ViewCart from './components/ViewCart';
import Profile from './components/Profile';
import Login from './components/Login';
import ChangePassword from './components/ChangePassword';
import cartContext from './Contexts/cartContexts';



function App() {
  const [item, setItem] = useState([]);
  return (
    <>
      <cartContext.Provider value={{ item, setItem }}>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/address" element={<Address />} />
            <Route path='/ViewCart' element={<ViewCart />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/login' element={<Login />} />
            <Route path='/changePassword' element={<ChangePassword />} />

          </Routes>
        </Router>

      </cartContext.Provider>
    </>

  );
}

export default App;
