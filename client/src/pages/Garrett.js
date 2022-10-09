import React from 'react'

function Garrett() {
  return (
    <div>
       <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Garrett