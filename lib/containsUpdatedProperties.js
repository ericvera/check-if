/**
 * Returns false if any of the properties in the objectUpdates has the same value in the originalObject. Change validation uses `==` as opposed to `===` and only works for objects that does not contain nested objects.
 * @param {object} objectUpdates
 * @param {object} originalObject A list of property names
 */
module.exports = (objectUpdates, originalObject) => {
  for (let key in objectUpdates) {
    if (objectUpdates[key] == originalObject[key]) {
      return false
    }
  }

  return true
}
