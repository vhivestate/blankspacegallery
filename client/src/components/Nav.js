import React from 'react'
import '../App.css'

function Nav(props) {
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><button href='' onClick={() => props.setCurrentPage(0)}>Home</button></li>
            <li><button href='' onClick={() => props.setCurrentPage(1)}>Artists</button></li>
            <li><button href='' onClick={() => props.setCurrentPage(2)}>Guest Artists</button></li>
            <li><button href='' onClick={() => props.setCurrentPage(3)}>Gallery</button></li>
            <li><button href='' onClick={() => props.setCurrentPage(4)}>Contact</button></li>
            </ul>
            </div>
        </div>
        <div className="navbar-center">
            <button id='logo' className="btn btn-ghost normal-case text-xl">BLANKSPACE</button>
        </div>
        <div className="navbar-end">

        </div>
        </div>
      )
    }

export default Nav
