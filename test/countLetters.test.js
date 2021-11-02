const assert = require('chai').assert;
const _ = require('../index');

describe("#countLetters", () => {
  it("returns {L: 2, H: 1} for 'LHL'", () => {
    const input = "LHL";
    const expectedOutput = {L: 2, H: 1};
    assert.deepEqual(_.countLetters(input), expectedOutput);
  });
});