import React from 'react'
import './styles.css'

function HighlightCard({ title, price, description, image }) {
  return (
    <div className="highlight-card">
      <img className="card-image img-responsive" src={image} alt={title} />
      <div className="wrapper">
        <div className="text">
          <h3>{title}</h3>
          <span className="price">{price}</span>
        </div>
        <p>{description}</p>
        <a href="/delivery">Order a delivery</a>
      </div>
    </div>
  )
}

export default HighlightCard
