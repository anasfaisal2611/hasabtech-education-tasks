// Task 1: Create a variable `name` and assign your name to it. Export it.

// Make sure it's a non-empty string.
const name = "Your Name Here";

if (typeof name !== "string" || name.length === 0) {
  throw new Error("`name` must be a non-empty string.");
}

module.exports = { name };
