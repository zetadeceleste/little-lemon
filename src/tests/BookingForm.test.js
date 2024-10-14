import { render, screen, fireEvent } from '@testing-library/react'
import BookingForm from '../components/BookingSection/BookingForm'

test('Renders the Choose date label', () => {
  const availableTimes = ['17:00', '18:00']
  const onDateChange = jest.fn()

  render(
    <BookingForm availableTimes={availableTimes} onDateChange={onDateChange} />
  )

  const labelElement = screen.getByText(/Choose date/i)
  expect(labelElement).toBeInTheDocument()
})

test('Form can be submitted by the user', () => {
  const availableTimes = ['17:00', '18:00']
  const onDateChange = jest.fn()
  const handleSubmit = jest.fn()

  render(
    <BookingForm
      availableTimes={availableTimes}
      onDateChange={onDateChange}
      onSubmit={handleSubmit}
    />
  )

  const form = screen.getByRole('form')
  fireEvent.submit(form)

  expect(handleSubmit).toHaveBeenCalledTimes(1)
})
