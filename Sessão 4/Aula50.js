function createBook(title, author, pages) {
  const book = {
    bookTile: title,
    bookAuthor: author,
    bookPages: pages,
    printBook: function () {
      console.log("Printing...");
    },
  };
  return book;
}

const book1 = createBook("Atomic", "James", 306);
const book2 = createBook("Think", "Napolean", 400);

console.log(book1);

console.log(book2);
