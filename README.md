# check-if

[![github license](https://img.shields.io/github/license/ericvera/check-if.svg?style=flat-square)](https://github.com/ericvera/check-if/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/check-if.svg?style=flat-square)](https://npmjs.org/package/check-if)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg?style=flat-square)](https://github.com/facebook/jest)

Client input validation library.

# Usage

## Install module

`npm install --save check-if`

`yarn add check-if`

## Sample

```javascript
const checkIf = require('check-if')

// [your code here...]

if (!checkIf.isShortDate('2043-01-01')) {
  // Logic to handle invalid input goes here
}
```

# Functions

| Function                                                   | Description                                                                                                                                                                                                        |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `areInSyncFirestoreTimestamps(timeA, timeB)`               | Returns false if:</br>- any of the inputs is not a valid `firebase.Firestore.Timestamp`</br>- the times don't match                                                                                                |
| `containsExactProperties(object, properties)`              | Returns false if the properties listed in `properties` do not match the properties contained in `object`.                                                                                                          |
| `containsUpdatedProperties(objectUpdates, originalObject)` | Returns false if any of the properties in the `objectUpdates` has the same value in `originalObject`. Only does a shallow comparison (does not works for objects that does not contain nested objects/properties). |
| `isFirestoreId(id)`                                        | Returns false if:</br>- not a valid Firestore id (20 characters a-z, A-Z, and 0-9)                                                                                                                                 |
| `isFirestoreTimestamp(timestamp)`                          | Returns false if:</br>- not a valid `firebase.firestore.Timestamp` (contains `toDate` and `toMillis` functions)                                                                                                    |
| `isNonDeletedObject(object)`                               | Returns false if:</br>- `object` is not of type `object`</br>- `object.deleted` or `object.del` is defined and set to `true`                                                                                       |
| `isNonEmptyFirestoreDocumentSnapshot(documentSnapshot)`    | Returns false if:</br>- `documentSnapshot` is not of type `object`</br>- `documentSnapshot.exists` is `undefined` or `false`                                                                                       |
| `isShortDate(value)`                                       | Expects a date with the format (YYYY-MM-DD). Returns false if:</br>- value is not a string with exactly 10 characters</br>- value can not be parsed by `new Date(value)`                                           |
| `isTrimmedNonEmptyString(value)`                           | Returns false if:</br>- value is not a string</br>- value is not trimmed</br>- string is empty                                                                                                                     |
