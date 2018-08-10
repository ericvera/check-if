const _isObject = require('./_isObject')

module.exports = object => _isObject(object) && Object.keys(object).length != 0
