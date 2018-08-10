[![github license](https://img.shields.io/github/license/ericvera/check-if.svg?style=flat-square)](https://github.com/ericvera/check-if/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/check-if.svg?style=flat-square)](https://npmjs.org/package/check-if)

# check-if

Input validation to used in a server.

# Details

A collection of functions to validate the input received in a server application.

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

| Functions                                | Description                                                                                                                                                              |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `containsProperties(object, properties)` | Returns false if any of the property names listed in `properties` are not in `object`                                                                                    |
| `isDateInMs(value)`                      | Returns false if:</br>- value is not a number</br>- value can not be parsed by `new Date(value)`                                                                         |
| `isFirestoreId(id)`                      | Returns false if:</br>- not a valid Firestore id (20 characters a-z, A-Z, and 0-9)                                                                                       |
| `isShortDate(value)`                     | Expects a date with the format (YYYY-MM-DD). Returns false if:</br>- value is not a string with exactly 10 characters</br>- value can not be parsed by `new Date(value)` |
