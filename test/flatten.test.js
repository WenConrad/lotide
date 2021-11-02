const assert = require('chai').assert;
const _ = require('../index');

describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5] for [1, [2, 3], [4, 5]]", () => {
    const input = [1, [2, 3], [4, 5]];
    const expectedOutput = [1, 2, 3, 4, 5];
    assert.deepEqual(_.flatten(input), expectedOutput);
  });
});