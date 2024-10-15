import React, { createContext, useState, useContext } from 'react'

const BookingContext = createContext()

export const useBooking = () => useContext(BookingContext)

export const BookingProvider = ({ children }) => {
  const [bookingData, setBookingData] = useState([])

  const addBooking = (formData) => {
    setBookingData((prev) => [...prev, formData])
  }

  return (
    <BookingContext.Provider value={{ bookingData, addBooking }}>
      {children}
    </BookingContext.Provider>
  )
}
