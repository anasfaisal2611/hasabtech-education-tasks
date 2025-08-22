// Task 3: Write a function `isEven(n)` that returns true if n is an even integer, else false.

function isEven(n) {
  if (typeof n !== "number" || !Number.isInteger(n)) return false;
  return n % 2 === 0;
}

module.exports = { isEven };
