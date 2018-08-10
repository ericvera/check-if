const _hasLength = require('./_hasLength')
const _isString = require('./_isString')

module.exports = value => _isString(value) && !_hasLength(value.trim(), 0)

// TODO: Remove this
// `'${argumentName}' is '${value}'. '${argumentName}' is expected to be a string representing a Date with the form YYYY-MM-DD.`
