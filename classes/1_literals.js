// const s1 = 'Hello';
// console.log(typeof s1);

// const s2 = new String('Hello');
// console.log(typeof s2);

const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',
    getSummary: function () {
        return `${this.title} was written by ${this.author}, published ${this.year}`;
    }
}

const book2 = {
    title: 'Book Two',
    author: 'Jane Doe',
    year: '2012',
    getSummary: function () {
        return `${this.title} was written by ${this.author}, published ${this.year}`;
    }
}

console.log(book1.getSummary());
console.log(book2.getSummary());