let productValue = Number(prompt("Enter the product value:"));

let estilo = document.getElementById("result");
if (productValue >= 20) {
  document.getElementById("result").innerHTML = "Approved";
  estilo.style.cssText =
    "color: white;" + "background-color: green;" + "border: 1px solid black";
} else {
  document.getElementById("result").innerHTML = "Denied";
  estilo.style.cssText =
    "color: white;" + "background-color: red;" + "border: 1px solid black";
}
