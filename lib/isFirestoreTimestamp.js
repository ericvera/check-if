const _isFirestoreTimestamp = require('./_isFirestoreTimestamp')

/**
 * Returns false if not a valid firebase.firestore.Timestamp (contains 'toDate' and 'toMillis' functions).
 * @param {firebase.firestore.Timestamp} timestamp
 * @returns {Boolean}
 */
module.exports = timestamp => _isFirestoreTimestamp(timestamp)
