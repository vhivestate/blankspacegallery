import React from 'react'

function Footer() {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
        <div className="form-control w-80">
            <span className="footer-title">Newsletter</span> 
            <label className="label">
                <span className="label-text">Enter your email address</span>
            </label> 
        <div className="relative">
            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
          </div>
        </div>

        <div>
          <span className="footer-title">LOCATION</span> 
            <p>298 24th Street, Ogden, UT</p>
        </div>

        <div>
          <span className="footer-title">CONTACT</span> 
            <p>blankspacegalleryllc@gmail.com</p>
        </div>
    </footer>
  )
}

export default Footer