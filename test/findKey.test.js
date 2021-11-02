const assert = require('chai').assert;
const _ = require('../index');

describe("#findKey", () => {
  it("returns 'noma' for {... noma: {stars: 2}, ...}, x => x.stars === 2", () => {
    const galaxies = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    const func = x => x.stars === 2;
    assert.strictEqual(_.findKey(galaxies, func), 'noma');
  });
});