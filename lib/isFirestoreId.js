const _isString = require('./_isString')

/**
 * Returns false if not a valid Firestore id (20 characters a-z, A-Z, and 0-9).
 * @param {String} id
 * @returns {Boolean}
 */
module.exports = id => _isString(id) && /^[A-Za-z0-9]{20}$/.test(id)
