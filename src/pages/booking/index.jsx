import React from 'react'
import { useNavigate } from 'react-router-dom'
import BookingForm from '../../components/BookingForm'
import { useBooking } from '../../context/BookingContext'
import './styles.css'

function BookingPage({ availableTimes, onDateChange }) {
  const { bookingData, addBooking } = useBooking()
  const navigate = useNavigate()

  const handleFormSubmit = (formData) => {
    addBooking(formData)
    navigate('/confirmed')
  }

  return (
    <section
      className="booking-section breakpoint"
      aria-labelledby="booking-heading"
    >
      <h1 id="booking-heading">Booking Page</h1>
      <BookingForm
        availableTimes={availableTimes}
        onDateChange={onDateChange}
        onSubmit={handleFormSubmit}
      />

      <h2 id="reservations-heading">Current Reservations</h2>
      <table aria-labelledby="reservations-heading">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Guests</th>
            <th scope="col">Occasion</th>
          </tr>
        </thead>
        <tbody>
          {bookingData.length > 0 ? (
            bookingData.map((booking, index) => (
              <tr key={index}>
                <td>{booking.date}</td>
                <td>{booking.time}</td>
                <td>{booking.guests}</td>
                <td>{booking.occasion}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" aria-live="polite">
                No reservations available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  )
}

export default BookingPage
