# week 03 Sept 19

## agenda

today  
- events
- streams
  - pipe
- buffers

next week  
- quiz 1
- setting up a project with NPM
  - package.json
  - using third party modules
- hello world node
  - http(s) module
- intro to http

## events

We have talked about how Node is Asynchronous and Event driven in the previous
classes, and looked at the callback pattern for coding in Node. Today we are going to
dive a little deeper into how node handles events.

> The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.  
>> nodejs documentation on the event loop

The Node 'events' module is another of Nodes core modules (like the fs module
that we looked at last week). This module contains the eventEmitter object with
which emitters can be used to emit named events which can call
functions(listeners). 

[node events docs](https://nodejs.org/dist/latest-v8.x/docs/api/events.html)


## streams buffers and pipes

Types of streams:

- Readable - streams from which data can be read (for example fs.createReadStream())
- Writable - streams to which data can be written (for example fs.createWriteStream()).
- Duplex - streams that are both Readable and Writable (for example net.Socket).
- Transform - Duplex streams that can modify or transform the data as it is written and read (for example zlib.createDeflate()).

Composing streams with pipe()

[node docs on the buffer module](https://nodejs.org/dist/latest-v8.x/docs/api/buffer.html)  
[node docs on the stream module](https://nodejs.org/dist/latest-v8.x/docs/api/stream.html)

## Reading/viewing to be done for next weeks class:

[nodejs.org docs event loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)  
[bert belder presentation on the event loop](https://www.youtube.com/watch?v=PNa9OMajw9w)  
[substack stream handbook](https://github.com/substack/stream-handbook)
