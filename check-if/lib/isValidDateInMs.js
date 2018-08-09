const { UserInputError } = require('apollo-server')
const _isNumber = require('./_isNumber')
const _isValidDate = require('./_isValidDate')
const R = require('ramda')

module.exports = (value, argumentName) => {
  if (R.isNil(value) || !_isNumber(value) || !_isValidDate(value)) {
    throw new UserInputError(
      `'${argumentName}' is '${value}'. '${argumentName}' is expected to be a number (milliseconds) representing a Date.`
    )
  }
}
