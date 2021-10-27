const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const assertEqual = function(actual, expected) {
  console.log((eqArrays(actual, expected)) ? `✅️ Assertion Passed: ${actual} === ${expected}` : `❌️ Assertion Failed: ${actual} !== ${expected}`);
};

const middle = function(midArray) {
  const halfLength = (midArray.length - 1) / 2;
  const floor = Math.floor(halfLength);
  const ceil = Math.ceil(halfLength + 1);
  const mid = (midArray.length > 2) ? midArray.slice(floor, ceil) : [];
  return mid;
};

assertEqual(middle([]), []);

assertEqual(middle([1]), []);
assertEqual(middle([1, 2]), []);

assertEqual(middle([1, 2, 3]), [2]);
assertEqual(middle([1, 2, 3, 4, 5]), [3]);

assertEqual(middle([1, 2, 3, 4]), [2, 3]);
assertEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);