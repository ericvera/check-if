const { isNonEmptyFirestoreDocumentSnapshot } = require('../')

test('works with a valid object', () => {
  expect(
    isNonEmptyFirestoreDocumentSnapshot({
      exists: true,
      data: () => {
        return { a: 'something' }
      }
    })
  ).toBe(true)
})

test('works with a valid object', () => {
  expect(
    isNonEmptyFirestoreDocumentSnapshot({
      exists: true,
      data: () => {
        return { deleted: true }
      }
    })
  ).toBe(true)
})

test('returns false if not an object', () => {
  expect(isNonEmptyFirestoreDocumentSnapshot(new Date())).toBe(false)
})

test('returns false if it is empty', () => {
  expect(isNonEmptyFirestoreDocumentSnapshot({})).toBe(false)
})

test('returns false if it is a valid snapshot that does not exist', () => {
  expect(isNonEmptyFirestoreDocumentSnapshot({ exists: false })).toBe(false)
})
