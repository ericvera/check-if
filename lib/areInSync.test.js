const { areInSync } = require('../')

test('works with a valid dates (in ms) in sync', () => {
  expect(areInSync(4312452333, 4312452333)).toBe(true)
})

test('works with a valid dates (in short form) in sync', () => {
  expect(areInSync('2018-01-01', '2018-01-01')).toBe(true)
})

test('returns false if any of the parameters is not a date', () => {
  expect(areInSync(24326432435, 'hello')).toBe(false)
})

test('returns false if any of the parameters is not a date', () => {
  expect(areInSync(false, 24326432435)).toBe(false)
})

test("returns false if the times don't match", () => {
  expect(areInSync(24326432487, 24326432435)).toBe(false)
})
