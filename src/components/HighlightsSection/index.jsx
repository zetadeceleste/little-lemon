import React from 'react'
import greekSaladImage from '../../assets/images/greek-salad-image.jpg'
import tunaSandwichImage from '../../assets/images/tuna-sandwich-image.jpg'
import carrotCake from '../../assets/images/carrot-cake-image.jpg'
import HighlightCard from './HighlightCard'
import './styles.css'

function HighlightsSection() {
  const dishes = [
    {
      title: 'Greek Salad',
      price: '$9.99',
      description:
        'A fresh salad with cucumbers, tomatoes, feta cheese, and olives.',
      image: greekSaladImage,
    },
    {
      title: 'Tuna Sandwich',
      price: '$5.99',
      description:
        'A delicious sandwich with tuna, lettuce, and mayonnaise on whole grain bread.',
      image: tunaSandwichImage,
    },
    {
      title: 'Carrot Cake',
      price: '$7.99',
      description: 'A moist carrot cake topped with cream cheese frosting.',
      image: carrotCake,
    },
  ]

  const handleClick = () => {
    alert('Button clicked')
  }

  return (
    <section
      className="highlights-section breakpoint"
      aria-labelledby="highlights-title"
    >
      <div className="text-wrapper">
        <h2 id="highlights-title">Specials</h2>
        <button
          onClick={handleClick}
          className="btn"
          aria-label="Start your free trial"
        >
          Start free trial
        </button>
      </div>
      <div className="cards-wrapper" role="list" aria-label="Dish highlights">
        {dishes.map((dish, index) => (
          <HighlightCard
            key={index}
            {...dish}
            aria-label={`Highlight card for ${dish.title}`}
          />
        ))}
      </div>
    </section>
  )
}

export default HighlightsSection
