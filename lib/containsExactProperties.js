/**
 * Returns false if the properties listed in 'properties' do not match the properties contained in 'object'.
 * @param {Object} object
 * @param {String[]} properties A list of property names (e.g. ['id', 'data'])
 * @returns {Boolean}
 */
module.exports = (object, properties) => {
  if (!object || !properties) {
    return false
  }

  const keys = Object.keys(object)

  if (keys.length !== properties.length) {
    return false
  }

  for (let propertyName of properties) {
    if (object[propertyName] === undefined) {
      return false
    }
  }

  return true
}
