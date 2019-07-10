// Classes
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author}, published ${this.year}`;
    }

    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old.`
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    static topBookStore() {
        return 'Half Price Books';
    }
}


// Instantiate Object
const book1 = new Book('Book One', 'John Doe', '2013');

console.log(book1);
book1.revise('2012');
console.log(book1);
book1.getSummary();
book1.getAge();
console.log(book1.getAge());

// Call Static method from Class object, not instance
console.log(Book.topBookStore());

