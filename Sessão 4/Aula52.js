function CreateBook(title, author, pages) {
  (this.bookTitle = title),
    (this.bookAuthor = author),
    (this.bookPages = pages);
}

const book1 = new CreateBook("Atomic", "James", 306);



console.log(book1);
