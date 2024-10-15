import React, { useReducer } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Footer from '../Footer'
import Navbar from '../Navbar'
import HomePage from '../../pages/home'
import BookingPage from '../../pages/booking'
import BookingConfirmedPage from '../../pages/booking-confirmed'
import { BookingProvider } from '../../context/BookingContext'
import './styles.css'

export function initializeTimes() {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
}

export function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
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
  const navigate = useNavigate()

  const handleDateChange = (date) => {
    dispatch({ type: 'UPDATE_TIMES', payload: date })
  }

  const submitForm = (formData) => {
    const success = window.submitAPI(formData)
    if (success) {
      navigate('/confirmed')
    } else {
      alert('Failed to make a reservation. Please try again.')
    }
  }

  return (
    <BookingProvider>
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
                onSubmit={submitForm}
              />
            }
          />
          <Route path="/confirmed" element={<BookingConfirmedPage />} />
        </Routes>
        <Footer />
      </main>
    </BookingProvider>
  )
}

export default Main
