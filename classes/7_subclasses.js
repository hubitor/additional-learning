// Classes
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} magazine was written by ${this.author}, published ${this.year}`;
    }

}


// Magazine Subclass
class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}


// Instantiate Magazine

const mag1 = new Magazine('Wired', 'Various Authors', '2018', 'Jan');

console.log(mag1.getSummary());