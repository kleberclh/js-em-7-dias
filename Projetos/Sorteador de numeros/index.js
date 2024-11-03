function getRandom() {
  let x = Math.floor(Math.random() * 100 + 1);
  document.getElementById("result").innerHTML = x;
}
