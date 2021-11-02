const findKey = function(object, func) {
  for (let key in object) {
    if (func(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;