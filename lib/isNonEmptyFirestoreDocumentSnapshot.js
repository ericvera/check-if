const _isObject = require('./_isObject')

/**
 * Returns false if 'documentSnapshot' is not of type 'object' or 'documentSnapshot.exists' is 'undefined' or 'false'.
 * @param {firebase.firestore.DocumentSnapshot} documentSnapshot
 * @returns {Boolean}
 */
module.exports = documentSnapshot =>
  _isObject(documentSnapshot) &&
  documentSnapshot.exists !== undefined &&
  documentSnapshot.exists
