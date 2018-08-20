const areInSync = require('./lib/areInSync')
const areInSyncFirestoreTimestamps = require('./lib/areInSyncFirestoreTimestamps')
const containsProperties = require('./lib/containsProperties')
const containsUpdatedProperties = require('./lib/containsUpdatedProperties')
const isDateInMs = require('./lib/isDateInMs')
const isFirestoreId = require('./lib/isFirestoreId')
const isFirestoreTimestamp = require('./lib/isFirestoreTimestamp')
const isNonDeletedObject = require('./lib/isNonDeletedObject')
const isNonEmptyFirestoreDocumentSnapshot = require('./lib/isNonEmptyFirestoreDocumentSnapshot')
const isNonEmptyFirestoreQuerySnapshot = require('./lib/isNonEmptyFirestoreQuerySnapshot')
const isNonEmptyObject = require('./lib/isNonEmptyObject')
const isShortDate = require('./lib/isShortDate')
const isTrimmedNonEmptyString = require('./lib/isTrimmedNonEmptyString')

module.exports = {
  areInSync,
  areInSyncFirestoreTimestamps,
  containsProperties,
  containsUpdatedProperties,
  isDateInMs,
  isFirestoreId,
  isFirestoreTimestamp,
  isNonDeletedObject,
  isNonEmptyFirestoreDocumentSnapshot,
  isNonEmptyFirestoreQuerySnapshot,
  isNonEmptyObject,
  isShortDate,
  isTrimmedNonEmptyString
}
