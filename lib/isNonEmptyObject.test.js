const { isNonEmptyObject } = require('../')

test('works with a valid object', () => {
  expect(isNonEmptyObject({ a: 'something', updated: 124343523 })).toBe(true)
})

test('works with a valid object', () => {
  expect(
    isNonEmptyObject({
      a: 'something',
      updated: 124343523,
      deleted: undefined
    })
  ).toBe(true)
})

test('returns false if not an object', () => {
  expect(isNonEmptyObject(new Date())).toBe(false)
})

test('returns false if it is empty', () => {
  expect(isNonEmptyObject({})).toBe(false)
})
