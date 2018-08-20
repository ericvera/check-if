const _isObject = require('./_isObject')

module.exports = object =>
  _isObject(object) && object.exists !== undefined && object.exists
