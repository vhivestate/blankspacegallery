import './App.css';
import React from 'react'
import Artist from "./pages/Artist"
import Events from "./pages/Events"
import Gallery from './pages/Gallery';
import Nav from "./components/Nav"
import Home from './pages/Home';
import Footer from './components/Footer';
import Garrett from './pages/Garrett';
import David from './pages/David';
import Campbell from './pages/Campbell'
import Contact from './pages/Contact'
import Booking from './pages/Booking'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/artists" element={<Artist/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/garrett" element={<Garrett/>}/>
        <Route path="/david" element={<David/>}/>
        <Route path="/campbell" element={<Campbell/>}/>
        <Route path="/booking" element={<Booking/>}/>

      </Routes>
      <Footer/>
    </Router>
  )
}

export default App