const { isFirestoreId } = require('../')

test('works with valid ID', () => {
  expect(isFirestoreId('bJkj98091ijdFnkn0oPl')).toBe(true)
})

test('throw with ID with invalid characters', () => {
  expect(isFirestoreId('bJkj98-91ijdFnkn0oPl')).toBe(false)
})

test('throw with ID short by a character', () => {
  expect(isFirestoreId('bJkj98p91ijdFnkn0oP')).toBe(false)
})

test('throw with ID long by a character', () => {
  expect(isFirestoreId('bJkj98d91ijdFnkNkn0oP')).toBe(false)
})

test('throw with ID just a number', () => {
  expect(isFirestoreId(13457564835423453423)).toBe(false)
})

test('throw with ID as an object', () => {
  expect(isFirestoreId({ id: 'bJkj98091ijdFnkn0oPl' })).toBe(false)
})
