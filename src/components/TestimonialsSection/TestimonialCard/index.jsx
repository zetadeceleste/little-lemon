/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './styles.css'

function TestimonialCard({ rating, image, name, review }) {
  return (
    <article
      className="testimonial-card"
      role="listitem"
      aria-labelledby={`${name}-title`}
      aria-describedby={`${name}-review`}
    >
      <div className="wrapper">
        <h4
          id={`${name}-rating`}
          className="rating"
          aria-label={`Rating: ${rating}`}
        >
          {rating}
        </h4>
        <div className="image-wrapper">
          <img
            className="card-image img-responsive"
            src={image}
            alt={`Photo of ${name}`}
          />
          <h4 id={`${name}-title`}>{name}</h4>
        </div>
        <p id={`${name}-review`}>{review}</p>
      </div>
    </article>
  )
}

export default TestimonialCard
