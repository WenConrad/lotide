const assert = require('chai').assert;
const _ = require('../index');

describe("#findKeyByValue", () => {
  it("returns 'drama' for {... drama: 'The Wire', ...}, 'The Wire''", () => {
    const bestTVShowsByGenre = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.strictEqual(_.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns undefined for {...}, 'That '70s Show''", () => {
    const bestTVShowsByGenre = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.strictEqual(_.findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});