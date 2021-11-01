const countLetters = function(wordToCount) {
  const letterCount = {};
  for (let letters of wordToCount) {
    if (letterCount[letters]) {
      letterCount[letters] += 1;
    } else if (letters !== " ") {
      letterCount[letters] = 1;
    }
  }
  return letterCount;
};

module.exports = countLetters;