const assertEqArrays = require("../assertArraysEqual");
const middle = require("../middle");

assertEqArrays(middle([1, 2, 3, 4, 5]), [3]);