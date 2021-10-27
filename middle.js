const middle = function(midArray) {
  if (midArray.length > 2) {
    const floor = Math.floor((midArray.length - 1) / 2);
    const ceil = Math.ceil((midArray.length + 1) / 2);
    return midArray.slice(floor, ceil);
  } else {
    return [];
  }
};