const assertEqual = function(actual, expected) {
  console.log((actual === expected) ? `✅️ Assertion Passed: ${actual} === ${expected}` : `❌️ Assertion Failed: ${actual} !== ${expected}`);
};

const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false
  } else {
    for (let key in obj1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  }
};







const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(Object.keys(ab).length);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);