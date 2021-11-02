const assert = require('chai').assert;
const _ = require('../index');

define("#takeUntil", () => {
  it("should look like this", () => {
    const input = [];
    const expectedOutput = [];
    assert.deepEqual(_.takeUntil(input, x => x + 2), expectedOutput);
  })
})