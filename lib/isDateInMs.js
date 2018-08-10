const _isNumber = require('./_isNumber')
const _isDate = require('./_isDate')

module.exports = value => _isNumber(value) && _isDate(value)

// TODO: Remove this
//`'${argumentName}' is '${value}'. '${argumentName}' is expected to be a number (milliseconds) representing a Date.`
