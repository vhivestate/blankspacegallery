import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

function Nav() {
    return (
        <nav className="navbar bg-[#171d22] text-white">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to={'/artists'}>Artists</Link></li>
            <li><Link to={'/booking'}>Booking</Link></li>
            <li><Link to={'/gallery'}>Gallery Exhibit</Link></li>
            <li><Link to={'/events'}>Events</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
            </ul>
            </div>
        </div>
        <div className="navbar-center">
            <Link id='logo' className="btn btn-ghost normal-case text-xl" to={'/'}>BLANKSPACE</Link>
        </div>
        <div className="navbar-end">

        </div>
        </nav>
      )
    }

export default Nav
