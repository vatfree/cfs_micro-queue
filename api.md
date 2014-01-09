
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

#### <a name="MicroQueue.length"></a>*microqueue*.length()&nbsp;&nbsp;<sub><i>Anywhere</i></sub> ####
-
*This method __length__ is defined in `MicroQueue`*

__Returns__  *{number}*  __(is reactive)__
Length / number of items in queue

> ```self.length = function() { ...``` [micro-queue.js:35](micro-queue.js#L35)

-

#### <a name="MicroQueue.add"></a>*microqueue*.add(value, reversed)&nbsp;&nbsp;<sub><i>Anywhere</i></sub> ####
-
*This method __add__ is defined in `MicroQueue`*

__Arguments__

* __value__ *{any}*  
The item to add to the queue
* __reversed__ *{boolean}*  
Internally used to add pre queue

-

> ```self.insert = function(key, value, reversed) { ...``` [micro-queue.js:44](micro-queue.js#L44)

-

#### <a name="MicroQueue.getFirstItem"></a>*microqueue*.getFirstItem()&nbsp;&nbsp;<sub><i>Anywhere</i></sub> ####
-
*This method __getFirstItem__ is defined in `MicroQueue`*

__Returns__  *{any}*
The item that was next in line

> ```self.getFirstItem = function() { ...``` [micro-queue.js:66](micro-queue.js#L66)

-

#### <a name="MicroQueue.reset"></a>*microqueue*.reset()&nbsp;&nbsp;<sub><i>Anywhere</i></sub> ####
-
*This method __reset__ is defined in `MicroQueue`*
This method will empty all data in the queue.

> ```self.reset = function() { ...``` [micro-queue.js:87](micro-queue.js#L87)

-
