import React, { useState, useEffect } from 'react'
import './styles.css'

function BookingForm({ availableTimes, onDateChange, onSubmit }) {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])
  const [time, setTime] = useState(availableTimes[0] || '')
  const [guests, setGuests] = useState(1)
  const [occasion, setOccasion] = useState('Birthday')

  useEffect(() => {
    if (availableTimes.length > 0) {
      setTime(availableTimes[0])
    }
  }, [availableTimes])

  const handleDateChange = (e) => {
    const selectedDate = e.target.value
    setDate(selectedDate)
    onDateChange(selectedDate)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = { date, time, guests, occasion }
    onSubmit(formData) // Llamar a la función submitForm
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-redundant-roles
    <form onSubmit={handleSubmit} className="booking-form" role="form">
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input className="btn" type="submit" value="Make Your reservation" />
    </form>
  )
}

export default BookingForm
