const head = function(array) {
  return (Array.isArray(array)) ? array[0] : undefined;
};

module.exports = head;