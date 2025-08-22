// Task 2: Implement `reverseString(str)` that returns the reversed string.
// Should throw if input is not a string.

function reverseString(str) {
  if (typeof str !== "string") throw new TypeError("reverseString expects a string");
  return [...str].reverse().join("");
}

module.exports = { reverseString };
