# JavaScript Callbacks
In Node.js, when calling a database, the functions will run but the database response may come later.
Callbacks are used to *force* order of operations.

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

