import React from 'react'
import Garrett from '../assets/avatar.jpg'
import David from '../assets/avatar2.jpg'
import ogSlow from '../assets/guest.jpg'

function Home() {
  return (
    <div className='home'>
        <div className='about'>
        <h1>ABOUT US</h1>
            <p>Blank Space is a bridge between the world of tattooing and the walls of a gallery. We aim to merrge these to industries to form a create space that is both thought provoking for the public as well as, theraputic for the clientel. When brought together they fill the black space.
            </p>
        </div>
        
    <div className='artists'>
    <div className="footer p-10 bg-base-200 text-base-content">
        <div>
            <div className='artist1'>
            <h1>ARTISTS</h1>
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

    <div className="guest">
    <div className="divider"></div> 
        <h1>GUEST ARTISTS</h1>
        <div className='guest'>
            <h2>@OG_SLOWDEATH</h2>
            <h2>11/01/2022 - 11/20/2022</h2>

                <div className='guest'>
                <img src={ogSlow}></img>
            </div>
            <a href='https://www.instagram.com/og_slowdeath/'>
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">VIEW WORK</button></a>
        </div>
        </div>
      </div>
      </div>
    </div>

    </div>
  )
}

export default Home