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


test('should queue events', function(assert) {
	assert.plan(2)
	var stack = ['foo', 'bar']
	var emitter = queue(new Emitter)
	emitter.queue('test', 'foo')
	emitter.queue('test', 'bar')
	emitter.on('test', function(val) {
		assert.equal(val, stack.shift())
	})
})

test('emits events', function(assert) {
	assert.plan(1)
	var emitter = queue(new Emitter)
	emitter.on('hello', function(val) {
		assert.equal(val, 'world')
	})
	emitter.queue('hello', 'world')
})
