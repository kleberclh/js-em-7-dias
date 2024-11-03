const num = [5, 6, 7, 8];

// const final = num.pop(); // remove no final
// const final = num.shift(); // remove no inicio
const final = num.splice(2, 1); // no index 2 remova 1 item

console.log(num);
console.log(final);
