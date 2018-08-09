const { UserInputError } = require('apollo-server')
const R = require('ramda')

/**
 * Throws if any of the required properties are not defined in the object.
 * @param {object} object
 * @param {string[]} properties A list of property names
 */
module.exports = (object, properties) => {
  R.forEach(propertyName => {
    if (R.isNil(object[propertyName])) {
      throw new UserInputError(
        `All properties are required. Property '${propertyName}' is missing.`
      )
    }
  }, properties)
}
