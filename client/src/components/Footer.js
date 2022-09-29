import React from 'react'
import { Instagram } from 'react-feather';
import { Mail } from 'react-feather';

function Footer() {
  return (
    <footer className="footer p-10 bg-[#171d22] text-whitet">
        <div></div>
        <div className="form-control w-80">
            <span className="footer-title">Newsletter</span> 
            <label className="label">
                <span className="label-text">Enter your email address</span>
            </label> 
        <div className="relative">
            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
            <button className="btn btn-active btn-ghost absolute top-0 right-0 rounded-l-none">Subscribe</button>
          </div>
        </div>

        <div>
          <span className="footer-title">LOCATION</span> 
          <a href='https://www.google.com/maps/place/298+24th+St,+Ogden,+UT+84401/@41.2231142,-111.9759563,17z/data=!3m1!4b1!4m5!3m4!1s0x87530eddcff562c5:0x9db09706d47bc5a6!8m2!3d41.2231142!4d-111.9737676'>298 24th Street, Ogden, UT, 84401 </a>
        </div>

        <div>
          <span className="footer-title">CONTACT</span> 
          <a href="mailto:blankspacegalleryllc@gmail.com"> blankspacegalleryllc@gmail.com </a>
            <a href='https://www.instagram.com/blankspacegallery/'><Instagram></Instagram></a>
        </div>

        <div className='copyright'>
            <p>Copyright © 2022 - All right reserved by Blank Space Gallery LLC </p>
        </div>

    </footer>
    
  )
}

export default Footer