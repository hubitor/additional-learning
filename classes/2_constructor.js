// Constructor

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function() {
        return `${this.title} was written by ${this.author}, published ${this.year}`;
    }
    
}

// Instantiate Object
const book1 = new Book('Book One', 'John Doe', '2015');
const book2 = new Book('Book Two', 'Jane Doe' , '2017');

console.log(book2);
console.log(book2.getSummary());