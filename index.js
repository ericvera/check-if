const containsProperties = require('./lib/containsProperties')
const containsUpdatedProperties = require('./lib/containsUpdatedProperties')
const isDateInMs = require('./lib/isDateInMs')
const isFirestoreId = require('./lib/isFirestoreId')
const isShortDate = require('./lib/isShortDate')
const isTrimmedNonEmptyString = require('./lib/isTrimmedNonEmptyString')

module.exports = {
  containsProperties,
  containsUpdatedProperties,
  isDateInMs,
  isFirestoreId,
  isShortDate,
  isTrimmedNonEmptyString
}
