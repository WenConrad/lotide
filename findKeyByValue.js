const findKeyByValue = function(objs, val) {
  for (let key in objs) {
    if (objs[key] === val) {
      return key;
    }
  }
};