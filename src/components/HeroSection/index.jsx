import React from 'react'
import image from '../../assets/images/hero-image.jpg'
import './styles.css'

function HeroSection() {
  const handleClick = () => {
    alert('Button clicked')
  }

  return (
    <section className="hero-section breakpoint">
      <div className="wrapper">
        <div className="text">
          <hgroup className="titles">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
          </hgroup>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quas
            voluptates ipsa mollitia recusandae, ad itaque expedita dignissimos
            nam laboriosam voluptate. Rem reprehenderit ad nesciunt porro omnis
            repellendus veritatis necessitatibus.
          </p>
        </div>
        <button onClick={handleClick} className="btn">
          Start free trial
        </button>
      </div>
      <img
        className="hero-image img-responsive"
        src={image}
        alt="Little Lemon"
      />
    </section>
  )
}

export default HeroSection
