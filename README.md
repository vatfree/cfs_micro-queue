Micro queue [![Build Status](https://travis-ci.org/CollectionFS/Meteor-micro-queue.png?branch=master)](https://travis-ci.org/CollectionFS/Meteor-micro-queue)
=========

MicroQueue:
* Simple
* Fast

> Note: MicroQueue can be used with `PowerQueue` but `MicroQueue` lacks the
> properties of an key ordered list - *It does try to compensate when reinserting keys - this is specially optimized for the [PowerQueue](https://github.com/CollectionFS/Meteor-power-queue)*

And... It's powered by Meteor's reactive sugar :)

Kind regards Eric(@aldeed) and Morten(@raix)

Happy coding!!

#API
[API Documentation](api.md)

From the docs:
#### <a name="MicroQueue"></a>new MicroQueue([lifo])&nbsp;&nbsp;<sub><i>Anywhere</i></sub> ####
```
A basic lifo or fifo queue
This is better than a simple array with pop/shift because shift is O(n)
and can become slow with a large array.
```
-

__Arguments__

* __lifo__ *{boolean}*    (Optional = false)
Set true for `lifo`, default is `fifo`

-
This queue was build as the spinal basis for the [`PowerQueue`](#PowerQueue)
The interface is very basic and consists of:
`add`, `get`, `reset` Making it possible to write a custom micro-queue for
the `PowerQueue` eg.: a queue that is persisted into a database etc.
Usage:
```js
var foo = new MicroQueue(); // Basic fifo queue
foo.add(1);
foo.add(2);
foo.add(3);
for (var i = 0; i < foo.length(); i++) {
   console.log(foo.get());
 }
```
The result should be: "1, 2, 3"

> ```MicroQueue = function(lifo) { ...``` [micro-queue.js:24](micro-queue.js#L24)

-

#Contribute
[API Complete Documentation](internal.api.md)
Update docs, `npm install docmeteor`
```bash
$ docmeteor
```