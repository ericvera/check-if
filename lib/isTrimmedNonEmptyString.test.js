const { isTrimmedNonEmptyString } = require('../')

test('works with a valid string', () => {
  expect(isTrimmedNonEmptyString('Something hére')).toBe(true)
})

test('works with a different valid string', () => {
  expect(isTrimmedNonEmptyString('1984-02-28')).toBe(true)
})

test('returns false with input in number', () => {
  expect(isTrimmedNonEmptyString(1533859272442)).toBe(false)
})

test('returns false with input that ends with white space', () => {
  expect(isTrimmedNonEmptyString('as ')).toBe(false)
})

test('returns false with a string that starts with special white space character', () => {
  expect(isTrimmedNonEmptyString('\tas')).toBe(false)
})

test('returns false with input that starts with white space', () => {
  expect(isTrimmedNonEmptyString(' as')).toBe(false)
})

test('returns false with an input with only white spaces', () => {
  expect(isTrimmedNonEmptyString('\n')).toBe(false)
})

test('returns false with object instead of string', () => {
  expect(isTrimmedNonEmptyString({ date: '1984-02-28' })).toBe(false)
})

test('returns false with empty string', () => {
  expect(isTrimmedNonEmptyString('')).toBe(false)
})
