/**
 * Returns false if any of the properties in the 'objectUpdates' has the same value in 'originalObject'. Only does a shallow comparison (does not works for objects that does not contain nested objects/properties).
 * @param {Object} objectUpdates
 * @param {Object} originalObject A list of property names
 * @returns {Boolean}
 */
module.exports = (objectUpdates, originalObject) => {
  for (let key in objectUpdates) {
    if (objectUpdates[key] === originalObject[key]) {
      return false
    }
  }

  return true
}
