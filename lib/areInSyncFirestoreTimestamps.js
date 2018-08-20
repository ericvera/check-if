const _isFirestoreTimestamp = require('./_isFirestoreTimestamp')

module.exports = (localLastUpdated, serverLastUpdated) =>
  _isFirestoreTimestamp(localLastUpdated) &&
  _isFirestoreTimestamp(serverLastUpdated) &&
  localLastUpdated.isEqual(serverLastUpdated)
