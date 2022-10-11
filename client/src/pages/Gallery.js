import React from 'react'
import { Link } from 'react-router-dom';

function Gallery() {
  return (
    <div>
      <div className="hero h-64" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
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