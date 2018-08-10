const _isString = require('./_isString')

module.exports = id => _isString(id) && /^[A-Za-z0-9]{20}$/.test(id)
