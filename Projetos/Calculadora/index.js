const screen = document.querySelector(".screen");
const buttons = document.querySelector(".buttons");
let num1 = null;
let operator = null;

buttons.addEventListener("click", handleButtonClick);

function handleButtonClick(event) {
  const button = event.target;
  const buttonText = button.textContent;

  if (buttonText === "C") {
    clearScreen();
  } else if (isNumber(buttonText)) {
    appendToScreen(buttonText);
  } else if (isOperator(buttonText)) {
    handleOperator(buttonText);
  } else if (buttonText === "=") {
    handleEquals();
  }
}

function clearScreen() {
  screen.textContent = "";
  num1 = null;
  operator = null;
}

function appendToScreen(text) {
  screen.textContent += text;
}

function isNumber(text) {
  return /^[0-9]$/.test(text);
}

function isOperator(text) {
  return /^(\+|-|\*|\/)$/.test(text);
}

function handleOperator(text) {
  num1 = parseFloat(screen.textContent);
  operator = text;
  clearScreen();
}

function handleEquals() {
  const num2 = parseFloat(screen.textContent);
  let result = null;
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  }
  screen.textContent = result;
  num1 = null;
  operator = null;
}
