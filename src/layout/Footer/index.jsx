import React from 'react'
import image from '../../assets/images/footer-image.jpg'
import './styles.css'

function Footer() {
  const links = [
    {
      title: 'Doormat Navigation',
      items: [
        { link: '/home', text: 'Home' },
        { link: '/about', text: 'About' },
        { link: '/menu', text: 'Menu' },
        { link: '/reservations', text: 'Reservations' },
        { link: '/order', text: 'Order Online' },
        { link: '/login', text: 'Login' },
      ],
    },
    {
      title: 'Contact',
      items: [
        { link: '/address', text: 'Address' },
        { link: 'tel:555-555-5555', text: 'Phone Number' },
        { link: '/email', text: 'Email' },
      ],
    },
    {
      title: 'Social Media Links',
      items: [
        { link: 'https://www.facebook.com/little-lemon', text: 'Facebook' },
        { link: 'https://www.instagram.com/little-lemon', text: 'Instagram' },
        { link: 'https://www.twitter.com/little-lemon', text: 'Twitter' },
      ],
    },
  ]

  function renderLinks() {
    return links.map((link, index) => (
      <div key={index} className="list">
        <h3>{link.title}</h3>
        <ul>
          {link.items.map(({ link, text }, index) => (
            <li key={index}>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </div>
    ))
  }

  return (
    <footer className="footer">
      <nav className="wrapper breakpoint">
        <img
          className="footer-image img-responsive"
          src={image}
          alt="Little Lemon"
        />
        {renderLinks()}
      </nav>
    </footer>
  )
}

export default Footer
