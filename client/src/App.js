import './App.css';
import React from 'react'
import Artist from "./pages/Artist"
import Guest from "./pages/Guest"
import Gallery from './pages/Gallery';
import Nav from "./components/Nav"
import Home from './pages/Home';
import Footer from './components/Footer';
import Garrett from './pages/Garrett';
import David from './pages/David';
import Contact from './pages/Contact'

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
        <Route path="/garrett" element={<Garrett/>}/>
        <Route path="/david" element={<David/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App