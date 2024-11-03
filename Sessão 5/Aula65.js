const movies = [
  { id: 1, movieName: "Dejavu" },
  { id: 2, movieName: "Back to the Future" },
  { id: 3, movieName: "The Matrix" },
];

console.log(
  movies.find(function (movie) {
    return movie.id == 1;
  })
);

console.log(movies.find((movie) => movie.id == 2));
