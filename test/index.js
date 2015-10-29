'use strict';

var assert = require('assert');
var indexOf = require('..');
var override = require('..').override;

describe('array indexOf test', function() {
  it('should work normally', function() {
    var arr = [1, 2, 3];
    assert.equal(indexOf(arr, 2), 1);
    assert.equal(indexOf(arr, 4), -1);
  });

  it('should support equal', function() {
    var arr = [1, 2, 3];
    var equal = function(inArr, target) {
      return (inArr + 1) === target;
    };
    assert.equal(indexOf(arr, 2, equal), 0);
  });

  it('should support object comparation', function() {
    var arr = [{a: 1}, {a: 2}];
    var equal = function(inArr, target) {
      return inArr.a === target.b;
    };
    assert.equal(indexOf(arr, {b: 2}, equal), 1);
  });

  it('should support #override', function() {
    var arr = [{a: 1}, {b: 2}];
    override(arr);
    var index = arr.indexOf({b: 2}, function(inArr, target) {
      return inArr.b === target.b;
    });
    assert.equal(index, 1);

    var arr2 = [1, 2, 3];
    override(arr2);
    assert.equal(arr2.indexOf(2), 1);
  });

  it('should throw err when not array', function(done) {
    try {
      indexOf({}, 1);
    } catch(e) {
      assert(e);
      done();
    }
  });
});
