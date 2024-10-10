import React from 'react'
import logo from '../../assets/images/little-lemon-logo.webp'
import './styles.css'

function Navbar() {
  return (
    <header className="header">
      <nav className="navbar breakpoint">
        <img className="logo" src={logo} alt="Little Lemon Logo" />
        <ul className="links">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/reservations">Reservations</a>
          </li>
          <li>
            <a href="/booking">Order online</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
