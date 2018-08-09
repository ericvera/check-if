// Add stuff here
const checkIf = require("../check-if");

try {
  checkIf.isValidDateInMs("0909uo", "someDate");
} catch (error) {
  console.log("error:", error.extensions);
}
