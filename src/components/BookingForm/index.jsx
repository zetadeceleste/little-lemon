import React, { useState, useEffect } from 'react'
import './styles.css'

export function validateForm(formData) {
  const errors = {}

  if (!formData.date) {
    errors.date = 'Please select a valid date.'
  }

  if (!formData.time) {
    errors.time = 'Please select a valid time.'
  }

  if (formData.guests < 1 || formData.guests > 10) {
    errors.guests = 'Guests must be between 1 and 10.'
  }

  if (!formData.occasion) {
    errors.occasion = 'Please select an occasion.'
  }

  return errors
}

function BookingForm({ availableTimes, onDateChange, onSubmit }) {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])
  const [time, setTime] = useState(availableTimes[0] || '')
  const [guests, setGuests] = useState(1)
  const [occasion, setOccasion] = useState('Birthday')
  const [errors, setErrors] = useState({})

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
    const formErrors = validateForm(formData)
    setErrors(formErrors)

    if (Object.keys(formErrors).length === 0) {
      onSubmit(formData)
    }
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
      {errors.date && <p className="error">{errors.date}</p>}

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
      {errors.time && <p className="error">{errors.time}</p>}

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
      />
      {errors.guests && <p className="error">{errors.guests}</p>}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      {errors.occasion && <p className="error">{errors.occasion}</p>}

      <input className="btn" type="submit" value="Make Your reservation" />
    </form>
  )
}

export default BookingForm
