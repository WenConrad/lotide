const assert = require('chai').assert;
const _ = require('../index');

describe("#takeUntil", () => {
  it("returns [1, 2, 5, 7, 2] for [1, 2, 5, 7, 2, -1, 2, 4, 5]", () => {
    const input = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const expectedOutput = [1, 2, 5, 7, 2];
    assert.deepEqual(_.takeUntil(input, x => x < 0), expectedOutput);
  });
  it("returns ['I\'ve', 'been', 'to', 'Hollywood'] for ['I\'ve', 'been', 'to', 'Hollywood', ',', 'I\'ve', 'been', 'to', 'Redwood']", () => {
    const input = ['I\'ve', 'been', 'to', 'Hollywood', ',', 'I\'ve', 'been', 'to', 'Redwood']
    const expectedOutput = ['I\'ve', 'been', 'to', 'Hollywood'];
    assert.deepEqual(_.takeUntil(input, x => x === ','), expectedOutput);
  });
});