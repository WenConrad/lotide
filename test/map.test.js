const assert = require('chai').assert;
const _ = require('../index');

describe("#map", () => {
  it("should return [1, 4, 9, 16] for ([1, 2, 3, 4], x => x * x)", () => {
    const before = [1, 2, 3, 4];
    const expectedOutput = [1, 4, 9, 16];
    assert.deepEqual(_.map(before, x => x * x), expectedOutput);
  });
  it("should return ['1a', '2a', '3a', '4a'] for ([1, 2, 3, 4], x => x + 'a')", () => {
    const before = [1, 2, 3, 4];
    const expectedOutput = ['1a', '2a', '3a', '4a'];
    assert.deepEqual(_.map(before, x => x +'a'),expectedOutput);
  });
});