const { areInSyncFirestoreTimestamps } = require('../')
const { Timestamp } = require('firebase-admin').firestore

// TODO: Fix the test cases (they are for areInSync and not for this function!)

test('works when both timestamps are the same', () => {
  const now = Timestamp.now()
  expect(areInSyncFirestoreTimestamps(now, now)).toBe(true)
})

test('works when both timestamps are the same (different objects)', () => {
  const d1 = Timestamp.fromDate(new Date(2018, 1, 12))
  const d2 = Timestamp.fromDate(new Date(2018, 1, 12))
  expect(areInSyncFirestoreTimestamps(d1, d2)).toBe(true)
})

test('returns false with values that are not Timestamps', () => {
  expect(areInSyncFirestoreTimestamps('2018-01-01', '2018-01-01')).toBe(false)
})

test('returns false with missing values', () => {
  expect(areInSyncFirestoreTimestamps('2018-01-01')).toBe(false)
})

test('returns false with objects', () => {
  expect(areInSyncFirestoreTimestamps({}, {})).toBe(false)
})

test("returns false if the times don't match", () => {
  const d1 = Timestamp.fromDate(new Date(2018, 1, 12, 5, 6, 8, 3))
  const d2 = Timestamp.fromDate(new Date(2018, 1, 12, 5, 6, 8, 4))
  expect(areInSyncFirestoreTimestamps(d1, d2)).toBe(false)
})
