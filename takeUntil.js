const takeUntil = function(array, callback) {
  let newArray = [];
  for (let value of array) {
    if (callback(value)) {
      return newArray;
    } else {
      newArray.push(value);
    }
  }
};

module.exports = takeUntil;