/** Minimal Jest config for local testing these tasks (optional). */
module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>"],
  testMatch: ["**/?(*.)+(test).[jt]s?(x)"],
  transform: {}
};
