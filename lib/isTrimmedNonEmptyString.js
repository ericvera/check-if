const _isString = require('./_isString')
const _isTrimmed = require('./_isTrimmed')

module.exports = value => !!value && _isString(value) && _isTrimmed(value)
