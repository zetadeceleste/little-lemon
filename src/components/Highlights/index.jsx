import React from 'react'
import greekSaladImage from '../../assets/images/greek-salad.jpg'
import tunaSandwichImage from '../../assets/images/tuna-sandwich.jpg'
import carrotCake from '../../assets/images/carrot-cake.jpg'
import Card from './Card'
import './styles.css'

function Highlights() {
  const cards = [
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
      <div className="wrapper">
        <h2>Specials</h2>
        <button onClick={handleClick} className="btn">
          Start free trial
        </button>
      </div>
      <div className="card-wrapper">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  )
}

export default Highlights
