import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/little-lemon-logo.webp'
import './styles.css'

function Navbar() {
  return (
    <header className="header">
      <nav className="navbar breakpoint">
        <img className="logo" src={logo} alt="Little Lemon Logo" />
        <ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
          <li>
            <Link to="/booking">Order online</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
