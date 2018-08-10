const { isShortDate } = require('../')

test('works with a valid short date', () => {
  expect(isShortDate('2019-01-21')).toBe(true)
})

test('works with a different short date', () => {
  expect(isShortDate('1984-02-28')).toBe(true)
})

test('returns false with date in number', () => {
  expect(isShortDate(1533859272442)).toBe(false)
})

test('returns false with any non-date string', () => {
  expect(isShortDate('as')).toBe(false)
})

test('returns false with invalid date string', () => {
  expect(isShortDate('2018-14-01')).toBe(false)
})

test('returns false with valid date string not in short format', () => {
  expect(
    isShortDate('Thu Aug 09 2018 21:00:22 GMT-0300 (Brasilia Standard Time)')
  ).toBe(false)
})

test('returns false with object with valid date', () => {
  expect(isShortDate({ date: '1984-02-28' })).toBe(false)
})
