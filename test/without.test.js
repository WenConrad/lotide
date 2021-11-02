const assert = require('chai').assert;
const _ = require('../index');

describe("#without", () => {
  it("returns [2, 3] for ([1, 2, 3], [1]", () => {
    const input = [1, 2, 3];
    const expectedOutput = [2, 3];
    assert.deepEqual(_.without(input, [1]), expectedOutput);
  });
  it("returns ['1', '2'] for ['1', '2', '3'], [1, 2, '3']", () => {
    const input = ['1', '2', '3'];
    const expectedOutput = ['1', '2'];
    assert.deepEqual(_.without(input, [1, 2, '3']), expectedOutput);
  });
});