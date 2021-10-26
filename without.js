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

const without = function(sources, itemsToRemove) {
  let removed = [];
  let inItemsToRemove = false;
  for (let i = 0; i < sources.length; i++) {
    for (let itemToRemove of itemsToRemove) {
      if (sources[i] === itemToRemove) {
        inItemsToRemove = true;
      }
    }
    if (!inItemsToRemove) {
      removed.push(sources[i]);
    }
    inItemsToRemove = false;
  }
  return removed;
};