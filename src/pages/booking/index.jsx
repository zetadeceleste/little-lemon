import React from 'react'
import BookingForm from '../../components/BookingForm'

function BookingPage({ availableTimes, onDateChange, onSubmit }) {
  return (
    <section className="booking-section breakpoint">
      <h1>Booking Page</h1>
      <BookingForm
        availableTimes={availableTimes}
        onDateChange={onDateChange}
        onSubmit={onSubmit}
      />
    </section>
  )
}

export default BookingPage
