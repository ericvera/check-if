# check-if

[![github license](https://img.shields.io/github/license/ericvera/check-if.svg?style=flat-square)](https://github.com/ericvera/check-if/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/check-if.svg?style=flat-square)](https://npmjs.org/package/check-if)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

Client input validation library.

# Usage

## Install module

`npm install --save check-if`

## Sample

```javascript
const checkIf = require('check-if')

// [your code here...]

if (!checkIf.isDateInMs('2043-01-01')) {
  // Logic to handle invalid input goes here
}
```

# Functions

| Functions                                                  | Description                                                                                                                                                                                                            |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `areInSync(localLastUpdated, serverLastUpdated)`           | Returns false if:</br>- any of the inputs is not a valid Date</br>- The times don't match                                                                                                                              |
| `containsProperties(object, properties)`                   | Returns false if any of the property names listed in `properties` are not in `object`                                                                                                                                  |
| `containsUpdatedProperties(objectUpdates, originalObject)` | Returns false if any of the properties in the `objectUpdates` has the same value in `originalObject`. Change validation uses `==` as opposed to `===` and only works for objects that does not contain nested objects. |
| `isDateInMs(value)`                                        | Returns false if:</br>- value is not a number</br>- value can not be parsed by `new Date(value)`                                                                                                                       |
| `isFirestoreId(id)`                                        | Returns false if:</br>- not a valid Firestore id (20 characters a-z, A-Z, and 0-9)                                                                                                                                     |
| `isNonDeletedObject(object)`                               | Returns false if:</br>- `object` is not of type object</br>- `object.deleted` is defined and set to `true`                                                                                                             |
| `isNonEmptyObject(object)`                                 | Returns false if:</br>- `object` is not of type object</br>- `object` is empty                                                                                                                                         |
| `isShortDate(value)`                                       | Expects a date with the format (YYYY-MM-DD). Returns false if:</br>- value is not a string with exactly 10 characters</br>- value can not be parsed by `new Date(value)`                                               |
| `isTrimmedNonEmptyString(value)`                           | Returns false if:</br>- value is not a string</br>- value is not trimmed</br>- string is empty                                                                                                                         |
