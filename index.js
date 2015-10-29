'use strict';

var assert = require('assert');

module.exports = function(arr, element, equal) {
  assert(Array.isArray(arr), 'arr should be Array');

  equal = equal || function(inArr, target) {
    return inArr === target;
  };

  for (var i = 0, l = arr.length; i < l; i++) {
    if (equal(arr[i], element)) {
      return i;
    }
  }
  return -1;
};

module.exports.override = function(arr) {
  arr.indexOf = function(element, equal) {
    return module.exports(this, element, equal);
  };
  return arr;
};
