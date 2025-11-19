// Aggregation
// Has - A (Weak)

class Book {
    constructor(title) {
        this.title = title;
    }
    
    display() {
        console.log(`Book: ${this.title}`);
    }   
}

class Library {
    #books;

    constructor(name, books) {
        this.name = name;
        this.#books = books;
    }

    addBook(book) {
        this.#books.push(book);
    }

    issueBook(book) {
        // find by id and pop out
    }

    showLibrary() {
        console.log(`Library: ${this.name}`);
        this.#books.forEach(book => book.display());
    }
}

const book1 = new Book("Leviathan");
const book2 = new Book("5 Point Someone");

const library1 = new Library("Unique Library",[book1, book2]);



