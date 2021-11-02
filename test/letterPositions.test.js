const assert = require('chai').assert;
const _ = require('../index');

describe("#letterPositions", () => {
  it("returns indexes of each letters for a word", () => {
    const phrase = "lighthouse in the house";
    const expectedReturn = { 
      l: ["0"],
      i: ["1", "11"],
      g: ["2"],
      h: ["3", "5", "15", "18"],
      t: ["4", "14"],
      o: ["6", "19"],
      u: ["7", "20"],
      s: ["8", "21"],
      e: ["9", "16", "22"],
      n: ["12"]
    };
    assert.deepEqual(_.letterPositions(phrase), expectedReturn);
  })
})