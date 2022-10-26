import React from 'react'
import { Link } from 'react-router-dom';

function Gallery() {
  return (
    <div>
      <div className="hero h-64" style={{ backgroundImage: `url("https://sat02pap005files.storage.live.com/y4msds2WntU6s13s66IXBa50esCWD5YEDX_92xgqtR6jK5qfS5iLxwNnYQN7X2jzZyZ5-5GCK8OEUXrA2SttbfIutZjGiCMYvjOpmH3cvlsktw59iBuHK9toXDPXxEC0OX-Z8F8YafXOuV67fp1Qhc7M_PfNrt34GS6SV-M0Mxl1-gaBlFEN6o-plsuwy2c7IAw?width=660&height=656&cropmode=none")` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">GALLERY</h1>
          <p>Community-driven tattoo studio & fine art gallery</p>
        </div>
      </div>
    </div>

    <div className='bg-white'>
    <div className='flex flex-wrap justify-center p-9'>
      <h2 className='max-w-md text-center text-black text-lg'>Blank Space is a studio that combines tattooing and the walls of a gallery.
          We create a space that is both thought-provoking for the community while comfortable for clientele, finding creative use of the blank space.
      </h2>
    </div>
    
        <div className='p-9 space-x-4 flex flex-wrap justify-center'>
          <button className="btn btn-active btn-wide text-white "><Link to={'/events'}>Events</Link></button>
          <button className="btn btn-active btn-wide text-white"><Link to={'/contact'}>Contact</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Gallery