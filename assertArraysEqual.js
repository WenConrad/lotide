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

assertEqual([1, 2, 3, 4, "5"], [1, 2, 3, 4, 5]);
assertEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);