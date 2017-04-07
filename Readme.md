# Emitter-queue

[![Build Status](https://travis-ci.org/bredele/emitter-queue.svg?branch=master)](https://travis-ci.org/bredele/emitter-queue)
[![NPM](https://img.shields.io/npm/v/emitter-queue.svg?style=flat-square)](https://www.npmjs.com/package/emitter-queue)
[![Downloads](https://img.shields.io/npm/dm/emitter-queue.svg?style=flat-square)](http://npm-stat.com/charts.html?package=emitter-queue)
[![pledge](https://bredele.github.io/contributing-guide/community-pledge.svg)](https://github.com/bredele/contributing-guide/blob/master/community.md)

Queue messages coming from an event emitter until the creation of a listener. This module works in both front end and back end with event emitter interfaces.

## Usage

```js
const queue = require('emitter-queue')
const Emitter = require('events')

const emitter = queue(new Emitter)
emitter.queue('hello', 'foo')
emitter.queue('hello', 'bar')
emitter.on('hello', function(val) {
  //foo
  //bar
})
```

## Installation

```shell
npm install emitter-queue --save
```

[![NPM](https://nodei.co/npm/emitter-queue.png)](https://nodei.co/npm/emitter-queue/)

## Question

For questions and feedback please use our [twitter account](https://twitter.com/bredeleca). For support, bug reports and or feature requests please make sure to read our
<a href="https://github.com/bredele/contributing-guide/blob/master/community.md" target="_blank">community guideline</a> and use the issue list of this repo and make sure it's not present yet in our reporting checklist.

## Contribution

Emitter-queue is an open source project and would not exist without its community. If you want to participate please make sure to read our <a href="https://github.com/bredele/contributing-guide/blob/master/community.md" target="_blank">guideline</a> before making a pull request. If you have any emitter-queue related project, component or other let everyone know in our wiki.


## Licence

The MIT License (MIT)

Copyright (c) 2016 Olivier Wietrich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

# emitter-queue

  > Queue [emitter](http://github.com/component/emitter) events

 `emitter-queue` can be used with [emitter](http://github.com/component/emitter) or as a plugin for [datastore](http://github.com/bredele/datastore).

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
