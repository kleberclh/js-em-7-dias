const book = {
  bookTile: "Atomic Habits",
  bookAuthor: "James Clear",
  bookPages: 306,
  bookChapters: {
    chap1: "Fundamentals",
    chap2: "1st law",
  },
};
for (let i in book) {
  console.log(i, ":" ,  book[i]);
}
