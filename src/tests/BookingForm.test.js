import { render, screen } from '@testing-library/react'
import { BookingForm, validateForm } from '../components/BookingForm'

const availableTimes = ['17:00', '18:00']
const onDateChange = jest.fn()
const onSubmit = jest.fn()

describe('BookingForm HTML5 Validations', () => {
  test('El campo de fecha tiene los atributos correctos', () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        onDateChange={onDateChange}
        onSubmit={onSubmit}
      />
    )
    const dateInput = screen.getByLabelText(/Choose date/i)
    expect(dateInput).toHaveAttribute('type', 'date')
  })

  test('El campo de invitados tiene los atributos correctos', () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        onDateChange={onDateChange}
        onSubmit={onSubmit}
      />
    )
    const guestsInput = screen.getByLabelText(/Number of guests/i)
    expect(guestsInput).toHaveAttribute('min', '1')
    expect(guestsInput).toHaveAttribute('max', '10')
  })
})

describe('BookingForm JavaScript Validations', () => {
  test('Devuelve errores si los datos son inválidos', () => {
    const invalidData = { date: '', time: '', guests: 0, occasion: '' }
    const errors = validateForm(invalidData)

    expect(errors.date).toBe('Please select a valid date.')
    expect(errors.time).toBe('Please select a valid time.')
    expect(errors.guests).toBe('Guests must be between 1 and 10.')
    expect(errors.occasion).toBe('Please select an occasion.')
  })

  test('No devuelve errores si los datos son válidos', () => {
    const validData = {
      date: '2024-10-10',
      time: '18:00',
      guests: 4,
      occasion: 'Birthday',
    }
    const errors = validateForm(validData)

    expect(errors).toEqual({})
  })
})
