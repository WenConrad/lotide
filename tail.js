const tail = function(array) {
  return (Array.isArray(array)) ? array.slice(1) : undefined;
};