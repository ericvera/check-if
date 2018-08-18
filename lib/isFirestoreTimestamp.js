const _isObject = require('./_isObject')

module.exports = timestamp =>
  _isObject(timestamp) &&
  typeof timestamp.toDate === 'function' &&
  typeof timestamp.toMillis === 'function'
