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

// CREATE CALLBACK
// simulate post to server
// add callback parameter to take in a function
let createPost = (post, callback) => {
    setTimeout(() => {
        posts.push(post);
        // call callback function after the push
        callback();
    }, 2000);
}

// getPosts(); //move into createPost as a parameter for createPost(post, callback)
createPost({ title: 'Post Three', body: 'This is post 3'}, getPosts);
