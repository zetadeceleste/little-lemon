import { initializeTimes, updateTimes } from '../layout/Main'

test('initializeTimes returns correct initial times', () => {
  const times = initializeTimes()
  expect(times).toHaveLength(6)
  expect(times).toContain('17:00')
  expect(times).toContain('22:00')
})

test('updateTimes returns the same times regardless of the date', () => {
  const initialState = initializeTimes()
  const action = { type: 'UPDATE_TIMES', payload: '2024-10-09' }
  const newState = updateTimes(initialState, action)

  expect(newState).toEqual(initialState)
})
