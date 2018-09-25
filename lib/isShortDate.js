const _hasLength = require('./_hasLength')
const _isDate = require('./_isDate')
const _isString = require('./_isString')

/**
 * Expects a date with the format (YYYY-MM-DD). Returns false if 'value' is not a 'string' with exactly 10 characters or 'value' can not be parsed by 'new Date(value)'.
 * @param {String} value
 * @returns {Boolean}
 */
module.exports = value =>
  _isString(value) && _hasLength(value, 10) && _isDate(value)
