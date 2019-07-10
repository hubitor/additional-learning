class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    static countUsers() {
        console.log('There are 50 users');
    }

    register() {
        console.log(`${this.username} is now registered.`);
    }
}


let bob = new User('bob', 'bob@bob.com', 'pass123');

console.log(bob);
bob.register();

User.countUsers();

// Extend class
class Member extends User {
    constructor(username, email, password, memberPackage) {
        super(username, email, password); // get properties from User
        this.package = memberPackage;
    }

    getPackage() {
        console.log(`${this.username} is subscribed to the ${this.package} package.`)
    }
}

// instantiate Member
let mike = new Member('mike', 'mike@mike.com', '123', 'Standard');

mike.register();
mike.getPackage();