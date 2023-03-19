import React from 'react'
import logo from '../../images/logo.png'
import chevrondown from '../../images/chevrondown.svg'
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo-container">
            <img className="logo" alt="logo" src={logo}></img>
        </div>
        <div className="search-container">
            <input className="form-control mr-sm-2 search" type="search" placeholder="Search..." aria-label="Search"/>
        </div>
        <div className="avatar-container">
            <button type="button" className="btn btn-dark checkout">
                <span>Checkout (200)</span>
            </button>
            <img className="rounded-circle avatar" src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="Avatar" />
            <span>User Admin</span>
            <img className="avatar-dropdown" alt="logo" src={chevrondown}></img>
        </div>

    </nav>
  )
}

export default Navbar