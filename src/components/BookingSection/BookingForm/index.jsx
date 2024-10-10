import React, { useState } from 'react'
import './styles.css'

function BookingForm() {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])
  const [time, setTime] = useState('20:00')
  const [guests, setGuests] = useState(1)
  const [occasion, setOccasion] = useState('Birthday')

  const [availableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ])

  const handleDateChange = (e) => setDate(e.target.value)
  const handleTimeChange = (e) => setTime(e.target.value)
  const handleGuestsChange = (e) => setGuests(e.target.value)
  const handleOccasionChange = (e) => setOccasion(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ date, time, guests, occasion })
  }

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={handleTimeChange}>
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={handleGuestsChange}
      />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={handleOccasionChange}>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input className="btn" type="submit" value="Make Your reservation" />
    </form>
  )
}

export default BookingForm
