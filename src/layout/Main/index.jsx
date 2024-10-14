import React, { useReducer } from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from '../Footer'
import Navbar from '../Navbar'
import './styles.css'

import HomePage from '../../pages/home'
import BookingPage from '../../pages/booking'

export function initializeTimes() {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
}

export function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      console.log('Selected date:', action.payload)
      return initializeTimes()
    default:
      return state
  }
}

function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  )

  const handleDateChange = (date) => {
    dispatch({ type: 'UPDATE_TIMES', payload: date })
  }

  const handleFormSubmit = (formData) => {
    console.log('Confirmed reservation:', formData)
  }

  console.log('availableTimes en Main:', availableTimes)

  return (
    <main className="layout">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              onDateChange={handleDateChange}
              onSubmit={handleFormSubmit}
            />
          }
        />
      </Routes>
      <Footer />
    </main>
  )
}

export default Main
