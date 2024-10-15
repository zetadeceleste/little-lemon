/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './styles.css'

function HighlightCard({ title, price, description, image }) {
  return (
    <article
      className="highlight-card"
      aria-labelledby={`${title}-title`}
      role="region"
    >
      <img
        className="card-image img-responsive"
        src={image}
        alt={`Image of ${title}`}
      />
      <div className="wrapper">
        <div className="text">
          <h3 id={`${title}-title`}>{title}</h3>
          <span className="price" aria-label={`Price: ${price}`}>
            {price}
          </span>
        </div>
        <p>{description}</p>
        <a
          href="/delivery"
          className="delivery-link"
          aria-label={`Order delivery for ${title}`}
        >
          Order a delivery
        </a>
      </div>
    </article>
  )
}

export default HighlightCard
