
/**
 * Expose 'queue'
 */

module.exports = queue


/**
 * Queue events on emitter-like objects.
 *
 * @param {Emitter} emitter
 * @see  http://github.com/component/emitter
 * @api public
 */

function queue(emitter) {


  /**
   * Cache emitter on.
   * @api private
   */
  var cache = emitter.on


  /**
   * Emit event and store it if no
   * defined callbacks.
   * example:
   *
   *   .queue('message', 'hi');
   *
   * @param {String} event
   * @api public
   */

  emitter.queue = function(topic) {
    this._queue = this._queue || {}
    this._callbacks = this._callbacks || {}
    if(this.listeners(topic).length > 0) this.emit.apply(this, arguments)
    else (this._queue[topic] = this._queue[topic] || []).push([].slice.call(arguments, 1))
  }


  /**
   * Listen on the given `event` with `fn`.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */

  emitter.on = emitter.addEventListener = function(topic, fn) {
    this._queue = this._queue || {}
    var topics = this._queue[topic]
    cache.apply(this, arguments)
    if(topics) {
      for(var i = 0, l = topics.length; i < l; i++) {
        fn.apply(this, topics[i])
      }
      delete this._queue[topic]
    }
  }

  return emitter
}
