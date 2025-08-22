// Task 2: Write a function `add(a, b)` that returns the sum of two numbers.
// Export the function.

function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number" || Number.isNaN(a) || Number.isNaN(b)) {
    throw new TypeError("add(a, b) expects two numbers");
  }
  return a + b;
}

module.exports = { add };
