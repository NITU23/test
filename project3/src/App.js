import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Address from './components/Address';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import ViewCart from './components/ViewCart';
import Profile from './components/Profile';
import Login from './components/Login';
import ChangePassword from './components/ChangePassword';
import cartContext from './Contexts/cartContexts';
import Alerts from './components/Alerts';
import Signup from './components/Signup'
function App() {
  const [item, setItem] = useState([]);
  const [addedItem, setAddedItem] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAddedItem(false);
    }, 3000)
  });
  return (
    <>
      <cartContext.Provider value={{ item, setItem, setAddedItem }}>
        <Router>
          <Navbar />
          {addedItem && <Alerts />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/address" element={<Address />} />
            <Route path='/ViewCart' element={<ViewCart />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/login' element={<Login />} />
            <Route path='/changePassword' element={<ChangePassword />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </Router>

      </cartContext.Provider>
    </>

  );
}

export default App;
