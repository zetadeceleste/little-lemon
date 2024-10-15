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
    <form
      onSubmit={handleSubmit}
      className="booking-form"
      role="form"
      aria-labelledby="form-heading"
    >
      <h2 id="form-heading">Make Your Reservation</h2>

      <label htmlFor="res-date" aria-label="Select reservation date">
        Choose date
      </label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        aria-required="true"
      />
      {errors.date && (
        <p className="error" role="alert">
          {errors.date}
        </p>
      )}

      <label htmlFor="res-time" aria-label="Select reservation time">
        Choose time
      </label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        aria-required="true"
      >
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>
      {errors.time && (
        <p className="error" role="alert">
          {errors.time}
        </p>
      )}

      <label htmlFor="guests" aria-label="Enter number of guests">
        Number of guests
      </label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
        aria-required="true"
      />
      {errors.guests && (
        <p className="error" role="alert">
          {errors.guests}
        </p>
      )}

      <label htmlFor="occasion" aria-label="Select occasion">
        Occasion
      </label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        aria-required="true"
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      {errors.occasion && (
        <p className="error" role="alert">
          {errors.occasion}
        </p>
      )}

      <button
        type="submit"
        className="btn"
        aria-label="Submit reservation form"
      >
        Make Your reservation
      </button>
    </form>
  )
}

export default BookingForm
