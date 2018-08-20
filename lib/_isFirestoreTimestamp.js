const _isObject = require('./_isObject')

module.exports = value =>
  _isObject(value) &&
  typeof value.toDate === 'function' &&
  typeof value.toMillis === 'function'
