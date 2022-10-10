import React from 'react'
import Garrett from '../assets/garrettPic.png'
import David from '../assets/dave1.png'
import Campbell from '../assets/campbell.png'
import ogSlow from '../assets/og-slowdeath.jpg'
import { Link } from 'react-router-dom';


function Home() {

  return (
    <main className=' text-center bg-white'>

    {/* hero section */}
    <div className="hero min-h-screen bg-center bg-fixed" style={{ backgroundImage: `url("https://sat02pap005files.storage.live.com/y4mHv88zFNH6o94bbmy8fQn0idIU4fQxiLc3kjJcYB0PdmcbO02_E6rGqCcbaXTLQZrrFqlkygusIgqBxz5LHqtz00t6DSu7DsHu6TNJHKoMaBrBVVCcd8PIVHXgGLgbG2xBAV4p599PV-VxDq7-p4Uv72ekJMm-rEnwAw-6J4RYDp8JrjSDjYCXChVWwZR4_dI?width=768&height=1024&cropmode=none")` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md space-x-4">
          <h1 className="mb-5 text-5xl font-bold text-white">BLANK SPACE GALLERY</h1>
          <p className="mb-5">Bridging the gap between tattoo and fine art.</p>
          <button className="btn btn-active btn-ghost space-x-4"> <a href='#about'>TATTOO </a></button>

          <button className="btn btn-active btn-ghost hover:bg-gray-400"><Link to={'/gallery'}>fine art</Link></button>
    
      
 
        </div>
      </div>
    </div>

<h1 id='about'>ABOUT US</h1>
    <div className='cards flex flex-wrap justify-center'>
        <div  className='about w-10/12 rounded-md bg-gray-900 '>
        <h2 className='text-white'>Meshing the worlds of fine art & tattooing</h2>
            <p className='text-center	text-white '>Blank Space is a dynamic, community-forward fine art gallery and tattoo studio. We curate thought-provoking works spanning a wide array of subject matter and mediums in a comfortable environment for clientele. Like an empty canvas, Blank Space represents limitless creative potential. 
            </p>
        </div>
        </div>
        <div className="divider"></div> 

      
    <div id='allArtists' className='allArtists'>
    <h1>ARTISTS</h1>
    <div className='flex flex-wrap justify-center'>   

         {/* Garrett Sectiom */}
         <div className='flex flex-wrap justify-center pt-14'>
          <div className="card lg:card-side w-10/12 p-5 glass">
            <figur className=''><img src={Garrett} alt="Album"/></figur>
            <div className="card-body justify-around ">
              <h2 className="card-title">@HAMDOESNTMATTER</h2>
              <div className='card-text'>
              <p className='min-w-fit'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi</p>
                </div>
                <div className='flex flex-wrap p-3 justify-center'>
                <button className="about-btn btn btn-active  text-white"><Link to={'/projects'}>View Portfolio</Link></button>  
                  </div>
                </div>
            </div>
          </div>

{/* Davids section */}
    <div className='flex flex-wrap justify-center pt-14'>
        <div className="card lg:card-side w-10/12 p-5 glass">
          <figur className=''><img src={David} alt="Album"/></figur>
          <div className="card-body justify-around ">
            <h2 className="card-title">@THEPHATDAVE</h2>
            <div className='card-text'>
            <p className='min-w-fit'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi</p>
              </div>
              <div className='flex flex-wrap p-3 justify-center'>
              <button className="about-btn btn btn-active  text-white"><Link to={'/projects'}>View Portfolio</Link></button>  
                </div>
              </div>
          </div>
        </div>

{/* campbell section */}
        <div className='flex flex-wrap justify-center pt-14'>
        <div className="card lg:card-side w-10/12 p-5 glass">
          <figur className=''><img src={Campbell} alt="Album"/></figur>
          <div className="card-body justify-around ">
            <h2 className="card-title">@_COWGORL</h2>
            <div className='card-text'>
            <p className='min-w-fit'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi</p>
              </div>
              <div className='flex flex-wrap p-3 justify-center'>
              <button className="about-btn btn btn-active  text-white"><Link to={'/projects'}>View Portfolio</Link></button>  
                </div>
              </div>
          </div>
        </div>

</div>


{/* Guest start */}

    <div className="guest">
        <h1>GUEST ARTISTS</h1>
        <div className='artistCards'>

        <div className='flex flex-wrap justify-center pt-14'>
        <div className="card lg:card-side w-10/12 p-5 glass">
          <figur className=''><img src={ogSlow} alt="Album"/></figur>
          <div className="card-body justify-around ">
            <h2 className="card-title">@OG_SLOWDEATH</h2>
            <div className='card-text'>
            <p className='min-w-fit'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi</p>
              </div>
              <div className='flex flex-wrap p-3 justify-center'>
              <button className="about-btn btn btn-active  text-white"><Link to={'/projects'}>View WORK</Link></button>  
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