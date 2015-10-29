# array-index-of
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

More powerful version of Array.prototype.indexOf

## Install
`$ npm install array-index-of`

## Example
```js
var indexOf = require('array-index-of');
var index = indexOf([1, 2, 3], 2);  // 1
var index2 = indexOf([{a: 1}, {a: 2}], {a: 2}, function(inArr, target) {
  return inArr.a === target.a;
});  // 1

// or you can override #indexOf of an Array object
var override = require('array-index-of').override;
var arr = override([1, 2]);
var index = arr.indexOf(2, function(a, b) { return (a + 1) === b; });
console.log(index); // 0
```

## Lisence
MIT

[npm-image]: https://img.shields.io/npm/v/array-index-of.svg?style=flat-square
[npm-url]: https://npmjs.org/package/array-index-of
[travis-image]: https://img.shields.io/travis/luckydrq/array-index-of/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/luckydrq/array-index-of
[coveralls-image]: https://img.shields.io/coveralls/luckydrq/array-index-of/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/luckydrq/array-index-of?branch=master
