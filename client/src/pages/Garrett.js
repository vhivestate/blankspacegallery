import React from 'react'
import { Instagram } from 'react-feather';
import GarrettPic from '../assets/avatar.jpg'
import Man from '../assets/hamdoesntmatter/man.jpg'
import Wolf from '../assets/hamdoesntmatter/wolf.jpg'
import Mary from '../assets/hamdoesntmatter/mary.jpg'
import Picnic from '../assets/hamdoesntmatter/picnic.jpg'

function Garrett() {
  return (
    <div>
       <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className='p-6'><img src={GarrettPic} alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">@HAMDOESNTMATTER</h2>
          <p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

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

          <div className="card-actions justify-center">
          <p className='text-center'>Follow me on instagram to see my latest flash and to book your appointment</p>
            <button className="btn btn-active btn-ghost btn-wide"><a href='https://www.instagram.com/hamdoesntmatter/'><Instagram></Instagram></a></button>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Garrett