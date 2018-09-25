const _isFirestoreTimestamp = require('./_isFirestoreTimestamp')

/**
 * Returns false if any of the inputs is not a valid `firebase.firestore.Timestamp` or if the times don't match.
 * @param {firebase.firestore.Timestamp} timeA
 * @param {firebase.firestore.Timestamp} timeB
 * @returns {Boolean}
 */
module.exports = (timeA, timeB) =>
  _isFirestoreTimestamp(timeA) &&
  _isFirestoreTimestamp(timeB) &&
  timeA.isEqual(timeB)
