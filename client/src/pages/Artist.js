import React from 'react'
import Garrett from '../assets/garrettPic.png'
import David from '../assets/dave1.png'
import Campbell from '../assets/campbell.png'
import ogSlow from '../assets/og-slowdeath.jpg'
import { Link } from 'react-router-dom';
import { Instagram } from 'react-feather';

// HAMS TATTOOS
import Man from '../assets/hamdoesntmatter/man.jpg'
import Wolf from '../assets/hamdoesntmatter/wolf.jpg'
import Mary from '../assets/hamdoesntmatter/mary.jpg'
import Picnic from '../assets/hamdoesntmatter/picnic.jpg'

// PHAT DAVES TATTOOS
import Rats from '../assets/thephatdave/tpd4.jpg'
import Pig from '../assets/thephatdave/tpd2.jpg'
import Scorpion from '../assets/thephatdave/tpd3.jpg'
import Tree from '../assets/thephatdave/tpd1.jpg'

// COWGORLS TATTOOS
import Eyes from '../assets/cowgorl/cg1.jpg'
import Statue from '../assets/cowgorl/cg2.jpg'
import Flower from '../assets/cowgorl/cg3.jpg'
import Bonsai from '../assets/cowgorl/cg4.jpg'

function Artist() {
  return (
    <div>
    <div className="hero h-96" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">THE ARTISTS</h1>
          <p>Community-driven tattoo studio and fine art gallery. Our artists focus on bridging the gap between tattoos and fine art.</p>
        </div>
      </div>
    </div>

        <div id='allArtists' className='allArtists bg-white'>
        <h1 className='text-center pt-10'>RESIDENT ARTISTS</h1>

    <div className='flex flex-wrap justify-center'>   

         {/* Garrett Sectiom */}
         <div className='flex flex-wrap justify-center pt-10'>
          <div className="card lg:card-side w-10/12 p-5 ">
            <figure className='max-w-fit'><img src={Garrett} alt="Album"/></figure>
            <div className="card-body justify-around text-black">
              <h2 className="card-title">
              <a href='https://www.instagram.com/hamdoesntmatter/'><Instagram></Instagram></a>@HAMDOESNTMATTER
              </h2>
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
                <button className="btn btn-active  text-white"><Link to={'/projects'}>View Portfolio</Link></button>  
                  </div>
                </div>
            </div>
          </div>

{/* Davids section */}
<div className='flex flex-wrap justify-center pt-14'>
          <div className="card lg:card-side w-10/12 p-5 ">
            <figure className='max-w-fit'><img src={David} alt="Album"/></figure>
            <div className="card-body justify-around text-black">
            <h2 className="card-title">
              <a href='https://www.instagram.com/thephatdave/'><Instagram></Instagram></a>@THEPHATDAVE
              </h2>
              <div className='card-text'>
              <p className='min-w-fit'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi</p>
                </div>

                <div>
            <div className="carousel max-w-fit	">
            <div id="slide1" className="carousel-item relative max-w-fit	">
              <img src={Rats} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
              <img src={Pig} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
              <img src={Scorpion} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
              <img src={Tree} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
            </div>
                
                <div className='flex flex-wrap p-3 justify-center'>
                <button className="btn btn-active  text-white"><Link to={'/projects'}>View Portfolio</Link></button>  
                  </div>
                </div>
            </div>
          </div>

{/* campbell section */}
<div className='flex flex-wrap justify-center pt-14'>
          <div className="card lg:card-side w-10/12 p-5 ">
            <figure className='max-w-fit'><img src={Campbell} alt="Album"/></figure>
            <div className="card-body justify-around text-black">
              
            <h2 className="card-title">
              <a href='https://www.instagram.com/_cowgorl/'><Instagram></Instagram></a>@_COWGORL
              </h2>

              <div className='card-text'>
              <p className='min-w-fit'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi</p>
                </div>

                <div>
            <div className="carousel max-w-fit	">
            <div id="slide1" className="carousel-item relative max-w-fit	">
              <img src={Eyes} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
              <img src={Statue} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
              <img src={Flower} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
              <img src={Bonsai} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
            </div>
                
                <div className='flex flex-wrap p-3 justify-center'>
                <button className="btn btn-active  text-white"><Link to={'/projects'}>View Portfolio</Link></button>  
                  </div>
                </div>
            </div>
          </div>

</div>


{/* Guest start */}

    <div className="guest">
        <h1 className='text-center'>GUEST ARTISTS</h1>
        <div className='artistCards'>

        <div className='flex flex-wrap justify-center pt-14'>
        <div className="card lg:card-side w-10/12 p-5 ">
          <figure className=''><img src={ogSlow} alt="Album"/></figure>
          <div className="card-body justify-around text-black">
            <h2 className="card-title">@OG_SLOWDEATH</h2>
            <div className='card-text'>
            <p className='min-w-fit'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi</p>
              </div>
              <div className='flex flex-wrap p-3 justify-center'>
              <button className="btn btn-active  text-white"><Link to={'/projects'}>View WORK</Link></button>  
                </div>
              </div>
          </div>
        </div>

        <div className="card w-auto	 bg-white text-neutral-content p-14 ">
        <div className="card-body items-center text-center text-black">
          <h2 className="card-title ">Want to be part of Blank Space Gallery? </h2>
          <p>To apply for Guest Artist positions please email blankspacegalleryllc@gmail.com</p>
          <div className="card-actions justify-end">
            <button className="btn btn-active  text-white"><Link to={'/contact'}>Contact</Link></button>
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