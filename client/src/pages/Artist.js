import React from 'react'
import Garrett from '../assets/avatar.jpg'
import David from '../assets/avatar2.jpg'
import { Instagram } from 'react-feather';


function Artist() {
  return (
    <div className='artistCards'>
         {/* Garrett Sectiom */}
         <div className='cards'>
         <div className="card w-96 glass">
      <figure><img src={Garrett} alt="car!"/></figure>
      <div className="card-body">
        <h2 className="card-title">GARRETT SMITH</h2>
      <div className="card-actions justify-end">
      <button className="btn btn-primary">View Portfolio</button>
    </div>
  </div>
</div>
</div>
{/* Davids section */}
<div className='cards'>
<div className="card w-96 glass">
  <figure><img src={David} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">DAVID CARTER</h2>
    <div className="card-actions justify-end">
              <button className="btn btn-primary">View Portfolio</button>
             </div>
             </div>
           </div>
        </div>
    </div>
  )
}

export default Artist