import React from 'react'
import Garrett from '../assets/avatar.jpg'
import David from '../assets/avatar2.jpg'
import ogSlow from '../assets/og-slowdeath.jpg'
import { Link } from 'react-router-dom';


function Home() {

  return (
    <main className='bg-fixed	 bg-contain bg-top text-center' style={{ backgroundImage: `url("https://sat02pap005files.storage.live.com/y4mlCETQWKsEVEff_pKY-iHukXPYfeVaecejiIsnBg15ScpZ6dk1m47bMdigBLy7N21SQYo53cnPH9JfSz5-vw1OFve7TPKCH-5PRsc_46yTgw6uIDFWHOAoMV1sINQRV3o-0EHXO3l5iE-_cykX_XO5i6cCs5K0ipyfbunOmk1Buxa-38aanvCGx0NB-MRW8Kb?width=3024&height=4032&cropmode=none")` }}>

    {/* hero section */}
    <div className="hero min-h-screen bg-center" style={{ backgroundImage: `url("https://sat02pap005files.storage.live.com/y4mHv88zFNH6o94bbmy8fQn0idIU4fQxiLc3kjJcYB0PdmcbO02_E6rGqCcbaXTLQZrrFqlkygusIgqBxz5LHqtz00t6DSu7DsHu6TNJHKoMaBrBVVCcd8PIVHXgGLgbG2xBAV4p599PV-VxDq7-p4Uv72ekJMm-rEnwAw-6J4RYDp8JrjSDjYCXChVWwZR4_dI?width=768&height=1024&cropmode=none")` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-active btn-ghost hover:bg-gray-400">about us</button>
        </div>
      </div>
    </div>

<h1>ABOUT US</h1>
    <div className='cards flex justify-center'>
        <div id='about' className='about w-10/12 rounded-md glass '>
            <p className='text-center	text-white '>Blank Space is a bridge between the world of tattooing and the walls of a gallery. We aim to merrge these to industries to form a create space that is both thought provoking for the public as well as, theraputic for the clientel. When brought together they fill the black space.
            </p>
        </div>
        </div>
        <div className="divider"></div> 

      
    <div id='allArtists' className='allArtists'>
    <h1>ARTISTS</h1>
    <div className='artistCards justify-center'>   

         {/* Garrett Sectiom */}
    <div className='cards flex justify-center'>
      <div className="card w-10/12 glass">
        <figure><img src={Garrett} alt="car!"/></figure>
      <div className="card-body text-white	">
        <h2 className="card-title ">Garrett Smith</h2>
        <div className="card-actions justify-center">
        <button className="btn btn-active btn-ghost hover:bg-gray-400"><Link to={'/garrett'}>View Portfolio</Link></button>
        </div>
      </div>
    </div>
</div>

{/* Davids section */}
<div className='cards flex justify-center'>
<div className="card w-10/12 glass">
  <figure><img src={David} alt="car!"/></figure>
  <div className="card-body text-white	">
    <h2 className="card-title">David Carter</h2>
   
    <div className="card-actions justify-center">
      <button className="btn btn-active btn-ghost hover:bg-gray-400"><Link to={'/david'}>View Portfolio</Link></button>
      </div>
      </div>
    </div>
  </div>
</div>
{/* Guest start */}

    <div className="guest">
        <h1>GUEST ARTISTS</h1>
        <div className='artistCards'>

        <div className='cards flex justify-center'>
        <div className="card w-10/12 glass ">
        <figure><img src={ogSlow} alt="car!"/></figure>
        <div className="card-body text-white ">
            <h2 className="card-title text-center">@OG_SLOWDEATH</h2>
            <p>11/01/22 - 11/20/22</p>
            <div className="card-actions justify-end">
            <a href='https://www.instagram.com/og_slowdeath/'>
                <button className="btn btn-active btn-ghost hover:bg-gray-400">View Work</button>
                </a>
            </div>
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