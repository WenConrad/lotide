const assertEqual = function(actual, expected) {
  console.log((actual === expected) ? `✅️ Assertion Passed: ${actual} === ${expected}` : `❌️ Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(wordToCount) {
  const letterCount = {}
  for (let letters of wordToCount) {
    if (letterCount[letters]) {
      letterCount[letters] += 1;
    } else if (letters !== " ") {
      letterCount[letters] = 1;
    }
  }
  return letterCount;
}

const testExample = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};

console.log(countLetters("lighthouse in the house"));