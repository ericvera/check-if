/**
 * Returns false if any of the required properties are not defined in the object.
 * @param {object} object
 * @param {string[]} properties A list of property names
 */
module.exports = (object, properties) => {
  for (let propertyName of properties) {
    if (object[propertyName] == null) {
      return false
    }
  }

  return true
}
