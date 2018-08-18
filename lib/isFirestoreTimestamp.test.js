const { isFirestoreTimestamp } = require('../')
const { Timestamp } = require('firebase-admin').firestore

test('works with valid Timestamp for now', () => {
  expect(isFirestoreTimestamp(Timestamp.now())).toBe(true)
})

test('works with valid Timestamp for other time', () => {
  expect(isFirestoreTimestamp(new Timestamp(312434242, 123412))).toBe(true)
})

test('returns false with string', () => {
  expect(isFirestoreTimestamp('bJkj98p91ijdFnkn0oP')).toBe(false)
})

test('returns false with number', () => {
  expect(isFirestoreTimestamp(145425345234)).toBe(false)
})

test('returns false with date', () => {
  expect(isFirestoreTimestamp(Date.now())).toBe(false)
})

test('returns false with empty object', () => {
  expect(isFirestoreTimestamp({})).toBe(false)
})

test('returns false with blank string', () => {
  expect(isFirestoreTimestamp('')).toBe(false)
})

test('returns false with short string date', () => {
  expect(isFirestoreTimestamp('2019-03-23')).toBe(false)
})

test('returns false with white space string', () => {
  expect(isFirestoreTimestamp('\n')).toBe(false)
})
