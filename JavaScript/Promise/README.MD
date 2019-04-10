# Udacity Promise Tutorials

## promise-udacity.js
[Udacity's JavaScript Promise Tutorial](https://classroom.udacity.com/courses/ud898)
"The Promise object s used for deferred and synchronous computations" - *MDN*
Asynchronous is an unknown or unpredictable time.
Async code is not guaranteed to excecute in a single unbroken timeline.
Assume that you don't know when async operations will complete.

Best way to handle async code is PROMISES, using Callbacks

Fulfilled(Resolved): It Worked!
Rejected: It didn't work.
Pending: Still waiting...
Settled: Something Happened!

### 1.7 Syntax
```
var promise = new Promose(function(resolve[,reject])) {
    var value = do something();
    if (thinWorked) {
        resolve(value);
    } else if (somethingWentWrong) {
        reject();
    }
}).then(function(value) {
    // success!
    return nextThing(value);
}).catch(rejectFunction);
```
* resolve & reject are two callback functions to specify if promise is fulfilled or rejected.

* From [link](https://classroom.udacity.com/courses/ud898/lessons/5972243496/concepts/61045985370923): 
```
new Promise(function(resolve) {
  console.log('first');
  resolve();
  console.log('second');
}).then(function() {
  console.log('third');
});
```
You'll notice that 'first', 'second' and 'third' all get logged. Most notably, 'second' gets logged despite the fact that it comes after resolve().

Around 2:11, I start talking about passing values or undefined through resolve() and reject() to .then and .catch. The values themselves aren't being passed to .then or .catch, rather they're being passed to the functions called by .then or .catch.
