const _isNumber = require('./_isNumber')
const _isDate = require('./_isDate')

module.exports = value => _isNumber(value) && _isDate(value)
