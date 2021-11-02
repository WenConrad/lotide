const assert = require('chai').assert;
const _ = require('../index');

describe("#countOnly", () => {
  it("returns {Jason: 1, Fang: 2} for [..., Fang, Jason, ..., Fang, etc], {Jason: True, Fang: True, ...}", () => {
    const inputArray = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    const inputObject = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };
    const expectedOutput = {Jason: 1, Fang: 2};
    assert.deepEqual(_.countOnly(inputArray, inputObject), expectedOutput);
  });
});