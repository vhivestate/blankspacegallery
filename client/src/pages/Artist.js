

import React from 'react'
import Garrett from '../assets/avatar.jpg'
import David from '../assets/avatar2.jpg'

function Artist() {
  return (
    <div className='artists'>
     <h1>ARTISTS</h1>
      <div className='artist1'>
        <h2>Garrett Smith</h2>
        <div className='Avatar'>
            <img src={Garrett}></img>
        </div>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">VIEW PORTFOLIO</button>
      </div>

      <div className='artist2'>
        <h2>David Carter</h2>
        <div className='Avatar2'>
            <img src={David}></img>
        </div>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">VIEW PORTFOLIO</button>
      </div>
    </div>
  )
}

export default Artist