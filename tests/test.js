// Add stuff here
const checkIf = require('../')

try {
  checkIf.containsAllProperties({ a: 34 }, ['a', 'b'])
} catch (error) {
  console.log('error:', error.message)
}
