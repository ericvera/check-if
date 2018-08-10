const _hasLength = require('./_hasLength')
const _isString = require('./_isString')
const _isTrimmed = require('./_isTrimmed')

module.exports = value =>
  _isString(value) && _isTrimmed(value) && !_hasLength(value, 0)

// TODO: Remove this
// `'${argumentName}' is '${value}'. '${argumentName}' is expected to be a string representing a Date with the form YYYY-MM-DD.`