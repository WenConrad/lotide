const assert = require('chai').assert;
const _ = require("../index");

describe("#tail", () => {
  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(_.tail([1, 2, 3, 4]), [2, 3, 4]);
  });
  it("returns [] for ['1']", () => {
    assert.deepEqual(_.tail(["1"]), []);
  });
});