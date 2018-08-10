const _isDate = require('./_isDate')

module.exports = (localLastUpdated, serverLastUpdated) =>
  _isDate(localLastUpdated) &&
  _isDate(serverLastUpdated) &&
  localLastUpdated === serverLastUpdated
