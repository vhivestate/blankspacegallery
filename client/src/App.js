import './App.css';
import React, {useState} from 'react'
import Artist from "./pages/Artist"
import Contact from "./pages/Contact"
import Guest from "./pages/Guest"
import Gallery from './pages/Gallery';
import Nav from "./components/Nav"
import Home from './pages/Home';
import Footer from './components/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/artists" element={<Artist/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/guest" element={<Guest/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App