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
        { link: '/booking', text: 'Order Online' },
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
    return links.map((section, index) => (
      <div
        key={index}
        className="list"
        aria-labelledby={`section-title-${index}`}
      >
        <h3 id={`section-title-${index}`}>{section.title}</h3>
        <ul aria-label={`${section.title} links`}>
          {section.items.map(({ link, text }, itemIndex) => (
            <li key={itemIndex}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Navigate to ${text}`}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ))
  }

  return (
    <footer className="footer" aria-label="Footer">
      <nav className="wrapper breakpoint" aria-label="Footer Navigation">
        <img
          className="footer-image img-responsive"
          src={image}
          alt="Little Lemon logo"
        />
        {renderLinks()}
      </nav>
    </footer>
  )
}

export default Footer
