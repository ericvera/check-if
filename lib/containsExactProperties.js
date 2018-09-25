/**
 * Returns false if the provided object does not contain exactly theproperties listed in properties.
 * @param {object} object
 * @param {string[]} properties A list of property names
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
    if (object[propertyName] == null) {
      return false
    }
  }

  return true
}
