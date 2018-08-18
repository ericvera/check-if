const areInSync = require('./lib/areInSync')
const containsProperties = require('./lib/containsProperties')
const containsUpdatedProperties = require('./lib/containsUpdatedProperties')
const isDateInMs = require('./lib/isDateInMs')
const isFirestoreId = require('./lib/isFirestoreId')
const isFirestoreTimestamp = require('./lib/isFirestoreTimestamp')
const isNonDeletedObject = require('./lib/isNonDeletedObject')
const isNonEmptyObject = require('./lib/isNonEmptyObject')
const isShortDate = require('./lib/isShortDate')
const isTrimmedNonEmptyString = require('./lib/isTrimmedNonEmptyString')

module.exports = {
  areInSync,
  containsProperties,
  containsUpdatedProperties,
  isDateInMs,
  isFirestoreId,
  isFirestoreTimestamp,
  isNonDeletedObject,
  isNonEmptyObject,
  isShortDate,
  isTrimmedNonEmptyString
}
