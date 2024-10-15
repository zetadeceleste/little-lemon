import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function BookingConfirmedPage() {
  return (
    <section className="booking-confirmed">
      <h1>Reservation Confirmed!</h1>
      <p>
        Your table has been successfully reserved. We look forward to seeing
        you!
      </p>
      <Link to="/">Return to Home</Link>
    </section>
  )
}

export default BookingConfirmedPage
