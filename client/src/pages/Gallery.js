import React from 'react'
import { Link } from 'react-router-dom';

function Gallery() {
  return (
    <div>
        <h1> Community-driven tattoo studio and fine art gallery rolled into one. </h1>
        <div className='pt-3 space-x-4'>
          <button className="btn btn-active btn-ghost hover:bg-gray-400 "><Link to={'/events'}>Events</Link></button>
          <button className="btn btn-active btn-ghost hover:bg-gray-400"><Link to={'/contact'}>Contact</Link></button>
          </div>
          <h1> GALLERY </h1>

    </div>
  )
}

export default Gallery