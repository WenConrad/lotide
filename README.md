# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @conradw/lotide`

**Require it:**

`const _ = require('@conradw/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: compare array, prints to console
* `assertEqual(...)`: compare primitive data, prints to console
* `assertObjectsEqual(...)`: compare object, -> boolean
* `countLetters(...)`: counts number of each letters in a string, -> object
* `countOnly(...)`: counts specified occurences of data in an array, -> object
* `eqArrays(...)`: compare array, -> boolean
* `eqObjects(...)`: compare object, -> boolean
* `findKey(...)`: find key given specified property of key, -> string
* `findKeyByValue(...)`: find key given key's value, -> string
* `head(...)`: returns first element of array, -> data
* `letterPositions(...)`: find indexes of each letter appearance in a string, -> object
* `map(...)`: transform an array given a function, -> array
* `middle(...)`: find middle element(s) of an aray, -> array
* `tail(...)`: return array without the first element, -> array
* `takeUntil(...)`: return array truncated at the first instance of specified function, -> array
* `without(...)`: remove elements from an array that matches second array, -> array