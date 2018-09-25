const { containsExactProperties } = require('..')

test('works with expected matching all properties', () => {
  expect(containsExactProperties({ a: 'sadf' }, ['a'])).toBe(true)
})

test('returns false if one property is missing', () => {
  expect(containsExactProperties({ a: 'sadf', b: 2342 }, ['a'])).toBe(false)
})

test('works with expected matching all properties in different order', () => {
  expect(
    containsExactProperties({ a: 'sadf', ck: 2342, ab8: new Date() }, [
      'ck',
      'ab8',
      'a'
    ])
  ).toBe(true)
})

test('returns false if any expected property is not in the object', () => {
  expect(containsExactProperties({ b: 2342 }, ['a'])).toBe(false)
})

test('returns false if no properties are specified', () => {
  expect(containsExactProperties({ a: 'sadf', b: 2342, papaya: '89knk' }, [])).toBe(
    false
  )
})

test('returns false if empty object', () => {
  expect(containsExactProperties({}, ['a', 'b'])).toBe(false)
})

test('returns false if null object', () => {
  expect(containsExactProperties(null, ['a', 'b'])).toBe(false)
})
