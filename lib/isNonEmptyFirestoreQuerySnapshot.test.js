const { isNonEmptyFirestoreQuerySnapshot } = require('../')

test('works with a valid object', () => {
  expect(
    isNonEmptyFirestoreQuerySnapshot({
      empty: false,
      docs: []
    })
  ).toBe(true)
})

test('works with a valid object', () => {
  expect(
    isNonEmptyFirestoreQuerySnapshot({
      empty: false,
      docs: []
    })
  ).toBe(true)
})

test('returns false if not an object', () => {
  expect(isNonEmptyFirestoreQuerySnapshot(new Date())).toBe(false)
})

test('returns false if it is empty', () => {
  expect(isNonEmptyFirestoreQuerySnapshot({})).toBe(false)
})

test('returns false if it is a valid snapshot that does not exist', () => {
  expect(isNonEmptyFirestoreQuerySnapshot({ empty: true })).toBe(false)
})
