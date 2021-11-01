const assertEqual = function(actual, expected, compare = (a, b) => a === b) {
  console.log(compare(actual, expected) ? `✅️ Assertion Passed: ${actual} === ${expected}` : `❌️ Assertion Failed: ${actual} !== ${expected}`);
};

module.exports = assertEqual;