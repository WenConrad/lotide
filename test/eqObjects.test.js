const assert = require('chai').assert;
const _ = require('../index');

describe("#eqObjects", () => {
  it("returns true for {c: '1', d: ['2', 3]} === {d: ['2', 3], c: '1'}", () => {
    const cd = {c: "1", d: ["2", 3]};
    const dc = {d: ["2", 3], c: "1"};
    assert.strictEqual(_.eqObjects(cd, dc), true);
  });
  it("returns false for {c: '1', d: ['2', 3]} === {c: '1', d: ['2', 3, 4]}", () => {
    const cd = {c: "1", d: ["2", 3]};
    const cd2 = {c: "1", d: ["2", 3, 4]};
    assert.strictEqual(_.eqObjects(cd, cd2), false); 
  });
});