const assertEqArrays = require("../assertArraysEqual");
const tail = require("../tail");

assertEqArrays(tail([1, 2, 3, 4]), [2, 3, 4]);