const areInSyncFirestoreTimestamps = require('./lib/areInSyncFirestoreTimestamps')
const containsExactProperties = require('./lib/containsExactProperties')
const containsUpdatedProperties = require('./lib/containsUpdatedProperties')
const isFirestoreId = require('./lib/isFirestoreId')
const isFirestoreTimestamp = require('./lib/isFirestoreTimestamp')
const isNonDeletedObject = require('./lib/isNonDeletedObject')
const isNonEmptyFirestoreDocumentSnapshot = require('./lib/isNonEmptyFirestoreDocumentSnapshot')
const isShortDate = require('./lib/isShortDate')
const isTrimmedNonEmptyString = require('./lib/isTrimmedNonEmptyString')

module.exports = {
  areInSyncFirestoreTimestamps,
  containsExactProperties,
  containsUpdatedProperties,
  isFirestoreId,
  isFirestoreTimestamp,
  isNonDeletedObject,
  isNonEmptyFirestoreDocumentSnapshot,
  isShortDate,
  isTrimmedNonEmptyString
}
