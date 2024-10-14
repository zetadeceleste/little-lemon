import React from 'react'
import BookingSection from '../../components/BookingSection'

function BookingPage({ availableTimes, onDateChange }) {
  return (
    <BookingSection
      availableTimes={availableTimes}
      onDateChange={onDateChange}
    />
  )
}

export default BookingPage
