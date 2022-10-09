import React from 'react'
import Garrett from '../assets/avatar.jpg'
import David from '../assets/avatar2.jpg'
import Campbell from '../assets/campbell.jpg'
import ogSlow from '../assets/og-slowdeath.jpg'
import { Link } from 'react-router-dom';


function Home() {

  return (
    <main className='bg-fixed	 bg-contain bg-top text-center' style={{ backgroundImage: `url("https://sat02pap005files.storage.live.com/y4mlCETQWKsEVEff_pKY-iHukXPYfeVaecejiIsnBg15ScpZ6dk1m47bMdigBLy7N21SQYo53cnPH9JfSz5-vw1OFve7TPKCH-5PRsc_46yTgw6uIDFWHOAoMV1sINQRV3o-0EHXO3l5iE-_cykX_XO5i6cCs5K0ipyfbunOmk1Buxa-38aanvCGx0NB-MRW8Kb?width=3024&height=4032&cropmode=none")` }}>

    {/* hero section */}
    <div className="hero min-h-screen bg-center" style={{ backgroundImage: `url("https://sat02pap005files.storage.live.com/y4mHv88zFNH6o94bbmy8fQn0idIU4fQxiLc3kjJcYB0PdmcbO02_E6rGqCcbaXTLQZrrFqlkygusIgqBxz5LHqtz00t6DSu7DsHu6TNJHKoMaBrBVVCcd8PIVHXgGLgbG2xBAV4p599PV-VxDq7-p4Uv72ekJMm-rEnwAw-6J4RYDp8JrjSDjYCXChVWwZR4_dI?width=768&height=1024&cropmode=none")` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md space-x-4">
          <h1 className="mb-5 text-5xl font-bold">BLANK SPACE GALLERY</h1>
          <p className="mb-5">Bridging the gap between tattoo and fine art.
</p>
          <button className="btn btn-active btn-ghost space-x-4"> <a href='#about'>TATTOO </a></button>

          <div className='pt-3'>
          <button className="btn btn-active btn-ghost hover:bg-gray-400"><Link to={'/gallery'}>fine art</Link></button>
          </div>
      
 
        </div>
      </div>
    </div>

<h1 id='about'>ABOUT US</h1>
    <div className='cards flex justify-center'>
        <div  className='about w-10/12 rounded-md glass '>
        <h2 className='text-white'>Meshing the worlds of fine art & tattooing</h2>
            <p className='text-center	text-white '>Blank Space is a dynamic, community-forward fine art gallery and tattoo studio. We curate thought-provoking works spanning a wide array of subject matter and mediums in a comfortable environment for clientele. Like an empty canvas, Blank Space represents limitless creative potential. 
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
        <h2 className="card-title justify-center">Garrett Smith</h2>
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
    <h2 className="card-title justify-center">David Carter</h2>
   
    <div className="card-actions justify-center">
      <button className="btn btn-active btn-ghost hover:bg-gray-400"><Link to={'/david'}>View Portfolio</Link></button>
      </div>
      </div>
    </div>
  </div>

  <div className='cards flex justify-center'>
<div className="card w-10/12 glass">
  <figure><img src={Campbell} alt="car!"/></figure>
  <div className="card-body text-white	">
    <h2 className="card-title justify-center">Campbell</h2>
   
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
            <h2 className="card-title justify-center">@OG_SLOWDEATH</h2>
            <p j>11/01/22 - 11/20/22</p>
            <div className="card-actions justify-center">
            <a href='https://www.instagram.com/og_slowdeath/'>
                <button className="btn btn-active btn-ghost hover:bg-gray-400 ">View Work</button>
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