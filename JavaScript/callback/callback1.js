var users = ["Sam", "Ellie", "Bernie"];

// --- async version --- \\
// const addUser = username => { setTimeout(() => { users.push(username) }, 200) }
// const getUsers = () => { setTimeout(() => { console.log(users) }, 100) }
// addUser("Jake");
// getUsers();

// --- callback version --- \\
const addUser = (username, callback) => {
    setTimeout(() => {
        users.push(username);
        callback();
    }, 200);
}

const getUsers = () => { setTimeout(() => { console.log(users) }, 100) }

addUser("Jake", getUsers);
