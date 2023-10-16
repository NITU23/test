import React  from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Address from './components/Address';
import { Routes, Route,BrowserRouter as Router } from "react-router-dom"
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import ViewCart from './components/ViewCart';



function App() {
  return (
    <>
    <Router>
      <Navbar  />
     <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/address" element={ <Address/> } />
        <Route path='/ViewCart' element={<ViewCart />} />
      </Routes>
      </Router>
    </>

  );
}

export default App;
