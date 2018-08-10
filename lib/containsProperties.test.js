const { containsProperties } = require('../')

test('works with expected matching all properties', () => {
  expect(containsProperties({ a: 'sadf' }, ['a'])).toBe(true)
})

test('works with expected matching only some properties', () => {
  expect(containsProperties({ a: 'sadf', b: 2342 }, ['a'])).toBe(true)
})

test('works with expected matching some properties (more than 1)', () => {
  expect(
    containsProperties(
      { a: 'sadf', b: 2342, ab8: new Date(), papaya: '89knk' },
      ['a', 'ab8', 'papaya']
    )
  ).toBe(true)
})

test('returns false if any expected property is not in the object', () => {
  expect(containsProperties({ b: 2342 }, ['a'])).toBe(false)
})

test('returns false if any expected property is not in the object', () => {
  expect(
    containsProperties({ a: 'sadf', b: 2342, papaya: '89knk' }, [
      'a',
      'ab8',
      'papaya'
    ])
  ).toBe(false)
})
