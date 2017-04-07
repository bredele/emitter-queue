/**
 * Test dependencies
 */

var test = require('tape')
var Emitter = require('component-emitter')
var queue = require('..')

test('should add a queue handler', function(assert) {
	assert.plan(1)
	var emitter = queue(new Emitter)
	assert.equal(typeof emitter.queue, 'function')
})
