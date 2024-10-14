import React from 'react'
import BookingForm from './BookingForm'
import './styles.css'

function BookingSection({ availableTimes, onDateChange }) {
  return (
    <section className="booking-section breakpoint">
      <h1>Booking Page</h1>
      <BookingForm
        availableTimes={availableTimes}
        onDateChange={onDateChange}
      />
    </section>
  )
}

export default BookingSection
