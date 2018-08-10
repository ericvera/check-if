const _hasLength = require('./_hasLength')
const _isDate = require('./_isDate')
const _isString = require('./_isString')

module.exports = value =>
  _isString(value) && _hasLength(value, 10) && _isDate(value)
