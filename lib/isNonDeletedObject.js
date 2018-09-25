const _isObject = require('./_isObject')

/**
 * Returns false if 'object' is not of type 'object' or 'object.deleted' or 'object.del' is defined and set to true.
 * @param {Object} object 
 * @returns {Boolean}
 */
module.exports = object => _isObject(object) && !object.deleted && !object.del
