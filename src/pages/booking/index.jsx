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
    <section className="booking-section breakpoint">
      <h1>Booking Page</h1>
      <BookingForm
        availableTimes={availableTimes}
        onDateChange={onDateChange}
        onSubmit={handleFormSubmit}
      />
      <h2>Current Reservations</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Guests</th>
            <th>Occasion</th>
          </tr>
        </thead>
        <tbody>
          {bookingData.map((booking, index) => (
            <tr key={index}>
              <td>{booking.date}</td>
              <td>{booking.time}</td>
              <td>{booking.guests}</td>
              <td>{booking.occasion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default BookingPage
