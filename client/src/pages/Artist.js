import React from 'react'
import Garrett from '../assets/avatar.jpg'
import David from '../assets/avatar2.jpg'
import Campbell from '../assets/campbell.jpg'
import ogSlow from '../assets/og-slowdeath.jpg'
import { Link } from 'react-router-dom';

function Artist() {
  return (
    <div>
        <h1 className='text-center'>RESIDENT ARTISTS</h1>

    <div className='artistCards'>
         {/* Garrett Sectiom */}
         <div className='cards'>
         <div className="card w-96 glass">
      <figure><img src={Garrett} alt="car!"/></figure>
      <div className="card-body">
        <h2 className="card-title justify-center">GARRETT SMITH</h2>
      <div className="card-actions justify-center">
      <button className="btn btn-active btn-ghost hover:bg-gray-400"><Link to={'/garrett'}>View Portfolio</Link></button>
    </div>
  </div>
</div>
</div>
{/* Davids section */}
<div className='cards'>
<div className="card w-96 glass">
  <figure><img src={David} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title justify-center">DAVID CARTER</h2>
    <div className="card-actions justify-center">
    <button className="btn btn-active btn-ghost hover:bg-gray-400"><Link to={'/david'}>View Portfolio</Link></button>
             </div>
             </div>
           </div>
        </div>

        <div className='cards'>
<div className="card w-96 glass">
  <figure><img src={Campbell} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title justify-center">CAMPBELL</h2>
    <div className="card-actions justify-center">
    <button className="btn btn-active btn-ghost hover:bg-gray-400"><Link to={'/campbell'}>View Portfolio</Link></button>
             </div>
             </div>
           </div>
        </div>
    </div>

    <h1 className='text-center'>GUEST ARTISTS</h1>
    <div className="guest flex flex-wrap justify-center ">
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={ogSlow} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">@OG_SLOWDEATH</h2>
                <p>11/01/2022 - 11/20/2022</p>
                <div className="card-actions">
                <a href='https://www.instagram.com/og_slowdeath/'>
                <button className="btn btn-primary">View Work</button>
                </a>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Artist