

import React from 'react'
import ogSlow from '../assets/og-slowdeath.jpg'


function Guest() {
  return (
    <div className="guest">
    <div className="divider"></div> 
        <h1>GUEST ARTISTS</h1>
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
  )
}

export default Guest