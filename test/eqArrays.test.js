const assert = require('chai').assert;
const _ = require('../index');

describe("#eqArrays", () => {
  it("returns true for [1, 2, 3, 4], [1, 2, 3, 4]", () => {
    assert.strictEqual(_.eqArrays([1, 2, 3, 4], [1, 2, 3, 4]), true);
  });
  it("returns false for [1, 2, 3, 4], [1, 2, '3', 4]", () => {
    assert.strictEqual(_.eqArrays([1, 2, "3", 4], [1, 2, 3, 4]), false); 
  });
});