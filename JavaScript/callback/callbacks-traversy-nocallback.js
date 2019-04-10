const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
]

// simulate get from server
function getPosts() {
    setTimeout(() => {
        let output = posts.map(post => {
            return post.title
        });
        console.log(output.join("\n"));
    }, 1000);
}

// simulate post to server
let createPost = (post) => {
    setTimeout(() => {
        posts.push(post);

    }, 2000);
}

getPosts();

createPost({ title: 'Post Three', body: 'This is post 3'});
