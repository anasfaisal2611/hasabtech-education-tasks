// Task 1: Implement `sumArray(arr)` that returns the sum of numeric values in an array.
// Non-number values should be ignored. Throws if input is not an array.

function sumArray(arr) {
  if (!Array.isArray(arr)) throw new TypeError("sumArray expects an array");
  return arr.reduce((acc, val) => (typeof val === "number" && !Number.isNaN(val) ? acc + val : acc), 0);
}

module.exports = { sumArray };
