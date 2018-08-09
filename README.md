[![github license](https://img.shields.io/github/license/ericvera/check-if.svg?style=flat-square)](https://github.com/ericvera/check-if/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/check-if.svg?style=flat-square)](https://npmjs.org/package/check-if)

# check-if
Input validation for Apollo Server.

# Details
A collection of functions to validate the input received in Apollo GraphQL Server. When a validation fails the function throw one of Apollo Server's exceptions which are appropriately processed by Apollo Server. For more details on the errors see https://www.apollographql.com/docs/apollo-server/v2/features/errors.html.

# Usage
## Install module
`npm install --save check-if`

## Sample
```javascript
const checkIf = require('check-if')

// [your code here...]

// Throw UserInputError if it is not a valid date in ms.
checkIf.isValidDateInMs(value, argumentName)
```

# Functions
Functions | Description | Exception
--------- | ----------- | ---------
`isValidDateInMs(value, argumentName)` | Validates that:</br>- value is not Nil</br>- `typeof value` is `number`</br>- value can be parsed by `new Date(value)` | `UserInputError`


