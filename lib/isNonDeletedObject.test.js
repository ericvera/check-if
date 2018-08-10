const { isNonDeletedObject } = require('../')

test('works with a valid object', () => {
  expect(isNonDeletedObject({ a: 'something', updated: 124343523 })).toBe(true)
})

test('works with a valid object with deleted set to false', () => {
  expect(
    isNonDeletedObject({ a: 'something', updated: 124343523, deleted: false })
  ).toBe(true)
})

test('works with a valid object with deleted set to null', () => {
  expect(
    isNonDeletedObject({ a: 'something', updated: 124343523, deleted: null })
  ).toBe(true)
})

test('works with a valid object with deleted set to undefined', () => {
  expect(isNonDeletedObject({ a: 'something', deleted: undefined })).toBe(true)
})

test('returns false if not an object', () => {
  expect(isNonDeletedObject('abc')).toBe(false)
})

test('returns false if it is deleted', () => {
  expect(
    isNonDeletedObject({
      a: 'something',
      deleted: true
    })
  ).toBe(false)
})
