import React from 'react'
import Garrett from '../assets/avatar.jpg'
import David from '../assets/avatar2.jpg'
import ogSlow from '../assets/og-slowdeath.jpg'

function Home() {

  return (
    <main className='home'>
    
        <div className='about'>
        <h1>ABOUT US</h1>
            <p>Blank Space is a bridge between the world of tattooing and the walls of a gallery. We aim to merrge these to industries to form a create space that is both thought provoking for the public as well as, theraputic for the clientel. When brought together they fill the black space.
            </p>
        </div>
        <div className="divider"></div> 

      
    <div id='allArtists' className='allArtists'>
    <h1>ARTISTS</h1>
    <div className='artistCards'>    
         {/* Garrett Sectiom */}
    <div className='cards'>
      <div className="card w-96 glass">
        <figure><img src={Garrett} alt="car!"/></figure>
      <div className="card-body">
        <h2 className="card-title">Garrett Smith</h2>
        <div className="card-actions justify-end">
        <button className="btn btn-primary">View Portfolio</button>
        </div>
      </div>
    </div>
</div>
{/* Davids section */}
<div className='cards'>
<div className="card w-96 glass">
  <figure><img src={David} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">David Carter</h2>
   
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Portfolio</button>
      </div>
      </div>
    </div>
  </div>
</div>
{/* Guest start */}

    <div className="guest">
        <h1>GUEST ARTISTS</h1>
        <div className='artistCards'>
        <div className="card w-96 glass">
        <figure><img src={ogSlow} alt="car!"/></figure>
        <div className="card-body">
            <h2 className="card-title">@OG_SLOWDEATH</h2>
            <p>11/01/22 - 11/20/22</p>
            <div className="card-actions justify-end">
            <a href='https://www.instagram.com/og_slowdeath/'>
                <button className="btn btn-primary">View Work</button>
                </a>
            </div>
        </div>
       </div>
      </div>
      </div>
    </div>

    </main>
   
  )
}

export default Home