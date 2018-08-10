const { containsUpdatedProperties } = require('../')

test('works with original having all properties updated', () => {
  expect(
    containsUpdatedProperties({ a: 'sadf', b: 432 }, { a: '789h', b: 800 })
  ).toBe(true)
})

test('works with original having some properties updated', () => {
  expect(containsUpdatedProperties({ b: false }, { a: 'sadf', b: true })).toBe(
    true
  )
})

test('works with original having some properties updated and adding properties', () => {
  expect(
    containsUpdatedProperties(
      { a: 'ljljkj', c: 7055 },
      { a: 'sadf', b: 2342, ab8: new Date(), papaya: '89knk' }
    )
  ).toBe(true)
})

test('returns false if any updated property has the same value in the original', () => {
  expect(
    containsUpdatedProperties({ b: 2342, c: true }, { a: 'asdf', b: 2342 })
  ).toBe(false)
})

test('returns false if all updated properties have the same value', () => {
  expect(
    containsUpdatedProperties(
      { a: 653, b: 2342, c: false },
      { a: 653, b: 2342, c: false }
    )
  ).toBe(false)
})
