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

module.exports = letterPositions;