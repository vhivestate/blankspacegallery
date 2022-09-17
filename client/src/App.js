import './App.css';
import React, {useState} from 'react'
import Artist from "./pages/Artist"
import Contact from "./pages/Contact"
import Guest from "./pages/Guest"
import Gallery from './pages/Gallery';
import Nav from "./components/Nav"
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState(0)

  function displayPage(){
    if(currentPage === 0){
      return <Home></Home>;
    }else if(currentPage === 1){
      return <Artist></Artist>
    }else if (currentPage === 2){
      return <Guest></Guest>
    } else if (currentPage === 3) {
      return <Gallery></Gallery>
    }
    else {
      return <Contact></Contact>
    }
  }

  return (
    <>
      <Nav setCurrentPage={setCurrentPage}/>
      {displayPage()}
    <main>
      <Footer></Footer>
    </main>
    </>
  )
}

export default App