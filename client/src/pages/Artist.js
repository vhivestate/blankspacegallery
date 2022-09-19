

import React from 'react'
import Garrett from '../assets/avatar.jpg'
import David from '../assets/avatar2.jpg'
import { Instagram } from 'react-feather';


// garrett art

import Balloon from '../assets/hamdoesntmatter/balloon.jpg'
import Bamboo from '../assets/hamdoesntmatter/bamboo.jpg'
import Beach from '../assets/hamdoesntmatter/beach.jpg'
import Abstract from '../assets/hamdoesntmatter/abstract.jpg'
import Cowboy from '../assets/hamdoesntmatter/cowboy.jpg'

// dave art
import Skull from "../assets/thephatdave/dave1.jpg"
import Tree from "../assets/thephatdave/dave2.jpg"
import Pig from "../assets/thephatdave/dave3.jpg"
import Scorpion from "../assets/thephatdave/dave4.jpg"


function Artist() {
  return (
    <div className='artists'>
     <h1>ARTISTS</h1>

     <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={Garrett} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">@HAMDOESNTMATTER</h2>
    <p>Click the button to listen on Spotiwhy app.</p>

    <div className="carousel h-fit w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={Cowboy} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide2" className="carousel-item relative w-full">
    <img src={Balloon} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide3" className="carousel-item relative w-full">
    <img src={Abstract} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide4" className="carousel-item relative w-full">
    <img src={Bamboo} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

    <div className="card-actions justify-end">
      <button className="btn btn-primary">   <a href='https://www.instagram.com/hamdoesntmatter/'><Instagram></Instagram></a>   FOLLOW</button>
    </div>
  </div>
</div>

    

<div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={David} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">@THEPHATDAVE</h2>
    <p>Click the button to listen on Spotiwhy app.</p>

    <div className="carousel h-fit w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={Scorpion} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide2" className="carousel-item relative w-full">
    <img src={Skull} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide3" className="carousel-item relative w-full">
    <img src={Pig} className="w-full" />
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

    <div className="card-actions justify-end">
      <button className="btn btn-primary">   <a href='https://www.instagram.com/thephatdave/'><Instagram></Instagram></a>   FOLLOW</button>
    </div>
  </div>
</div>



      {/* <div className='artist2'>
        <h2>David Carter</h2>
        <div className='Avatar2'>
            <img src={David}></img>
        </div>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">VIEW PORTFOLIO</button>
      </div> */}
    </div>
  )
}

export default Artist