'use strict';
var assert = require('assert');
var toInt = require('../');
var toFloat = toInt.toFloat;

it(
	'should parse correctly',
	function() {
		assert.strictEqual(toInt('10'), 10);
		assert.strictEqual(toFloat('10.1'), 10.1);
	}
);

it(
	'should default to 0',
	function() {
		assert.strictEqual(toInt('foo'), 0);
		assert.strictEqual(toFloat('foo'), 0);
	}
);

it(
	'should allow a custom radix',
	function() {
		assert.strictEqual(toInt('A', 16), 10);
	}
);

it(
	'should allow a custom default',
	function() {
		assert.strictEqual(toInt('foo', null, 10), 10);
		assert.strictEqual(toFloat('foo', 10), 10);
	}
);