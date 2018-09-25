const _isString = require('./_isString')
const _isTrimmed = require('./_isTrimmed')

/**
 * Returns false if 'value' is not a 'string' or 'value' is not trimmed or 'string' is empty
 * @param {String} value
 * @returns {Boolean}
 */
module.exports = value => !!value && _isString(value) && _isTrimmed(value)
