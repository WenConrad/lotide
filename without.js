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

module.exports = without;