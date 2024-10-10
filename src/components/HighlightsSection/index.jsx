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
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quas voluptates ipsa mollitia recusandae, ad itaque expedita dignissimos nam laboriosam voluptate. Rem reprehenderit ad nesciunt porro omnis repellendus veritatis necessitatibus.',
      image: greekSaladImage,
    },
    {
      title: 'Tuna Sandwich',
      price: '$5.99',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quas voluptates ipsa mollitia recusandae, ad itaque expedita dignissimos nam laboriosam voluptate. Rem reprehenderit ad nesciunt porro omnis repellendus veritatis necessitatibus.',
      image: tunaSandwichImage,
    },
    {
      title: 'Carrot Cake',
      price: '$7.99',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quas voluptates ipsa mollitia recusandae, ad itaque expedita dignissimos nam laboriosam voluptate. Rem reprehenderit ad nesciunt porro omnis repellendus veritatis necessitatibus.',
      image: carrotCake,
    },
  ]

  const handleClick = () => {
    alert('Button clicked')
  }

  return (
    <section className="highlights-section breakpoint">
      <div className="text-wrapper">
        <h2>Specials</h2>
        <button onClick={handleClick} className="btn">
          Start free trial
        </button>
      </div>
      <div className="cards-wrapper">
        {dishes.map((dish, index) => (
          <HighlightCard key={index} {...dish} />
        ))}
      </div>
    </section>
  )
}

export default HighlightsSection
