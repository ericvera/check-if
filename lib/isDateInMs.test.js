const { isDateInMs } = require('../')

test('works with date in ms', () => {
  expect(isDateInMs(53452454325)).toBe(true)
})

test('works with date in ms (negative)', () => {
  expect(isDateInMs(-14624323)).toBe(true)
})

test('returns false with date string', () => {
  expect(isDateInMs('2018-01-12')).toBe(false)
})

test('returns false with any string', () => {
  expect(isDateInMs('')).toBe(false)
})

test('returns false with random object', () => {
  expect(isDateInMs({ date: 12315433 })).toBe(false)
})

test('returns false when null', () => {
  expect(isDateInMs(null)).toBe(false)
})

test('returns false when empty', () => {
  expect(isDateInMs()).toBe(false)
})
