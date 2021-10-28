const letterPositions = function(sentence) {
  const results = {};
  for (let letter in sentence) {
    if (results[sentence[letter]]) {
      results[sentence[letter]].push(letter);
    } else if (sentence[letter] !== " ") {
      results[sentence[letter]] = [letter];
    }
  }
  return results;
};

let exampleCase = { 
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}
console.log(letterPositions("lighthouse in the house"))