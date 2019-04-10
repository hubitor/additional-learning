const fetch = require('node-fetch');
var async = require("async");

const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
]

// simulate get from server
function getPosts() {
    setTimeout(() => {
        let output = posts.map((post) => {
            return `${post.title}, ${post.body}`;
        });
        console.log(output.join("\n"));
    }, 1000);
}

// CREATE PROMISE
// simulate post to server
let createPost = (post) => {
    // add new Promise with resolve and reject as a function parameters.
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            posts.push(post);

            // error checking
            const error = false;

            if (!error) { // if no error, resolve()
                resolve();
            } else {
                reject('Error: Something went wrong!');
            }
        }, 2000);

    })
}

// FETCH with ASYNC / AWAIT
async function fetchUsers() {
    const res = await fetch
        ("https://jsonplaceholder.typicode.com/users");

    const data = await res.json();

    console.log(data)
}

fetchUsers();


