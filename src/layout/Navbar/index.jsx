import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/little-lemon-logo.webp'
import './styles.css'

function Navbar() {
  return (
    <header className="header" aria-label="Main Header">
      <nav className="navbar breakpoint" aria-label="Main Navigation">
        <Link to="/" aria-label="Go to Home">
          <img className="logo" src={logo} alt="Little Lemon Logo" />
        </Link>
        <ul className="links" role="menu" aria-label="Primary Navigation Links">
          <li role="menuitem">
            <Link to="/" aria-label="Home Page">
              Home
            </Link>
          </li>
          <li role="menuitem">
            <Link to="/about" aria-label="About Us Page">
              About
            </Link>
          </li>
          <li role="menuitem">
            <Link to="/menu" aria-label="Menu Page">
              Menu
            </Link>
          </li>
          <li role="menuitem">
            <Link to="/reservations" aria-label="Reservations Page">
              Reservations
            </Link>
          </li>
          <li role="menuitem">
            <Link to="/booking" aria-label="Order Online Page">
              Order online
            </Link>
          </li>
          <li role="menuitem">
            <Link to="/login" aria-label="Login Page">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
