'use strict';
var assert = require('assert');
var toInt = require('../');

it(
	'should ',
	function() {
		assert.strictEqual(toInt('unicorns'), 'unicorns & rainbows');
	}
);