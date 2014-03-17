var Queue = require('..'),
		Emitter = require('component-emitter'),
		assert = require('assert');

describe("Queue events", function() {
	var emitter;
	beforeEach(function() {
		emitter = new Emitter();
		Queue(emitter);
	});

	it('should add a queue handler', function() {
		assert(emitter.queue);
	});
	
	it("should queue events", function() {
		var stack = [];
		emitter.queue('test', 'foo');
		emitter.queue('test', 'bar');
		emitter.on('test', function(val) {
			stack.push(val);
		});
		assert.deepEqual(stack, ['foo', 'bar']);
	});

	it('emits events', function(done) {
		emitter.on('hello', function(val) {
			if (val === 'world') done();
		});
		emitter.queue('hello', 'world');
	});
	
});
