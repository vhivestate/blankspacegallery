import React from 'react'
import Garrett from '../assets/garrettPic.png'
import David from '../assets/dave1.png'
import Campbell from '../assets/campbell.png'
import ogSlow from '../assets/og-slowdeath.jpg'
import { Link } from 'react-router-dom';

import Man from '../assets/hamdoesntmatter/man.jpg'
import Wolf from '../assets/hamdoesntmatter/wolf.jpg'
import Mary from '../assets/hamdoesntmatter/mary.jpg'
import Picnic from '../assets/hamdoesntmatter/picnic.jpg'

function Artist() {
  return (
    <div>
    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">THE ARTISTS</h1>
        </div>
      </div>
    </div>
        <h1 className='text-center'>RESIDENT ARTISTS</h1>

        <div id='allArtists' className='allArtists bg-white'>
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

                <div>
            <div className="carousel max-w-fit	">
            <div id="slide1" className="carousel-item relative max-w-fit	">
              <img src={Man} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
              <img src={Wolf} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
              <img src={Mary} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
              <img src={Picnic} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
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
    </div>
  )
}

export default Artist