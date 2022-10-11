import React from 'react'

function Events() {
  return (
    <div>
      <div className="hero h-64" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
      <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">EVENTS</h1>
            <p>Community-driven tattoo studio & fine art gallery</p>
        </div>
      </div>
    </div>

    <div className='bg-white p-14'>
    <h1 className='text-center'> NO UPCOMING EVENTS</h1>
    </div>
    </div>
  )
}

export default Events