const fetch = require('node-fetch');


// Promise.all instead of multile .then()
const promise1 = Promise.resolve("Hello, World!");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Goodbye');
});
// fetch contain a promise
const promise4 = fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json()); 

// take an array of promises as parameter
Promise.all([promise1, promise2, promise3, promise4])
    .then(values => console.log(values));
