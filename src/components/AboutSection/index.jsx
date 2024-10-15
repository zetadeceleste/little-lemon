import React from 'react'
import image from '../../assets/images/about-image.jpg'
import './styles.css'

function AboutSection() {
  return (
    <section className="about-section breakpoint" aria-labelledby="about-title">
      <div className="wrapper">
        <div className="text">
          <hgroup className="titles">
            <h2 id="about-title">Little Lemon</h2>
            <h3>Chicago</h3>
          </hgroup>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quas
            voluptates ipsa mollitia recusandae, ad itaque expedita dignissimos
            nam laboriosam voluptate. Rem reprehenderit ad nesciunt porro omnis
            repellendus veritatis necessitatibus.
          </p>
        </div>
      </div>
      <img
        className="about-image img-responsive"
        src={image}
        alt="Restaurant Little Lemon in Chicago"
        aria-label="About Little Lemon restaurant"
      />
    </section>
  )
}

export default AboutSection
