import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function BookingConfirmedPage() {
  return (
    <section
      className="booking-confirmed"
      aria-labelledby="confirmation-heading"
    >
      <h1 id="confirmation-heading">Reservation Confirmed!</h1>
      <p>
        Your table has been successfully reserved. We look forward to seeing
        you!
      </p>
      <Link to="/" className="btn" aria-label="Return to Home">
        Return to Home
      </Link>
    </section>
  )
}

export default BookingConfirmedPage
