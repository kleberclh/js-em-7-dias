const tempLondon = [19, 10, 4, 6, 8, -1];

const tempPositive = tempLondon.every(function (value) {
  return value >= 0;
});

console.log(tempPositive);
