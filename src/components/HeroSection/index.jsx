import React from 'react'
import logo from '../../assets/images/little-lemon-logo.webp'
import './styles.css'

function HeroSection() {
  return (
    <section className="hero-section breakpoint">
      <div className="wrapper">
        <div className="text">
          <hgroup className="titles">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
          </hgroup>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quas
            voluptates ipsa mollitia recusandae, ad itaque expedita dignissimos
            nam laboriosam voluptate. Rem reprehenderit ad nesciunt porro omnis
            repellendus veritatis necessitatibus.
          </p>
        </div>
        <button className="btn">Start free trial</button>
      </div>
      <img src={logo} alt="Little Lemon Logo" />
    </section>
  )
}

export default HeroSection
