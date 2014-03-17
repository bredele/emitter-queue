
# emitter-queue

  > Queue [emitter](http://github.com/component/emitter) events

 `emitter-queue` can be used with [emitter](http://github.com/component/emitter) or as a plugin for [store](http://github.com/bredele/store).
 
## Installation

  Install with [component](http://component.io):

    $ component install bredele/emitter-queue

  Install with [nodejs](http://nodejs.org):

    $ npm install emitter-queue


## API

```js
emitter.queue('hello', 'foo');
emitter.queue('hello', 'bar');
emitter.on('hello', function(val) {
  //foo
  //bar
});
```

### .queue(event, ...)

  Emit event and store it if there isn't any listener for this particular event.

```js
emitter.queue('foo');
```


## License

  The MIT License (MIT)

  Copyright (c) 2014 <copyright holders>

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.