let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    /* this.info = function () {
        return `${title} ${author} , ${pages} , ${read}`; 
    }*/
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);

}

function displayBooksOnPage() {
    const books = document.querySelector(".books");

    myLibrary.forEach(myLibrary => {
        const card = document.createElement("div");
        card.classList.add("card");
        books.appendChild(card);
        for (let key in myLibrary) {
            console.log(`${key}: ${myLibrary[key]}`);
            const para = document.createElement("p");
            para.textContent = (`${key}: ${myLibrary[key]}`)
            card.appendChild(para);
        }
    })
}

addBookToLibrary("The Hobbit", "by J.R.R Tolkien", "295 pages", "not read yet");
addBookToLibrary("The Hobbit", "by J.R.R Tolkien", "295 pages", "not read yet");
addBookToLibrary("The Hobbit", "by J.R.R Tolkien", "295 pages", "not read yet");

displayBooksOnPage();

