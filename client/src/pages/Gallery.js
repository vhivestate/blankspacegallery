import React from 'react'
import { Link } from 'react-router-dom';

function Gallery() {
  return (
    <div>
        <h2> Community-driven tattoo studio and fine art gallery rolled into one. </h2>
        <p>Blank Space is a studio that combines tattooing and the walls of a gallery.
We create a space that is both thought-provoking for the community while comfortable for clientele, finding creative use of the blank space.
</p>
        <div className='pt-3 space-x-4'>
          <button className="btn btn-active btn-ghost hover:bg-gray-400 "><Link to={'/events'}>Events</Link></button>
          <button className="btn btn-active btn-ghost hover:bg-gray-400"><Link to={'/contact'}>Contact</Link></button>
          </div>
          <h1> GALLERY </h1>

    </div>
  )
}

export default Gallery