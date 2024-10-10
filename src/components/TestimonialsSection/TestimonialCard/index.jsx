import React from 'react'
import './styles.css'

function TestimonialCard({ rating, image, name, review }) {
  return (
    <div className="testimonial-card">
      <div className="wrapper">
        <h4 className="rating">{rating}</h4>
        <div className="image-wrapper">
          <img className="card-image img-responsive" src={image} alt={name} />
          <h4>{name}</h4>
        </div>
        <p>{review}</p>
      </div>
    </div>
  )
}

export default TestimonialCard
