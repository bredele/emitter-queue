var Queue = require('..'),
		Emitter = require('component-emitter'),
		assert = require('assert');

describe("Queue events", function() {
	var emitter;
	beforeEach(function() {
		emitter = new Emitter();
	});
	
	it("should queue events", function() {
		var stack = [];
		Queue(emitter);
		emitter.emit('test', 'foo');
		emitter.emit('test', 'bar');
		emitter.on('test', function(val) {
			stack.push(val);
		});
		assert.deepEqual(stack, ['foo', 'bar']);
	});
	
});
