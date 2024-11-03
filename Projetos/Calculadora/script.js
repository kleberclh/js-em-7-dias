const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".button");
const clearButton = document.querySelector(".clear");
const equalButton = document.querySelector(".equal");

let expression = " ";

// adiciona um event listener para cada botão
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;
    if (buttonText === "C") {
      clearScreen();
    } else if (buttonText === "=") {
      calculate();
    } else {
      appendToScreen(buttonText);
    }
  });
});

// limpa a tela da calculadora
function clearScreen() {
  expression = "";
  updateScreen();
}

// adiciona um texto à tela da calculadora
function appendToScreen(text) {
  expression += text;
  updateScreen();
}

// atualiza a tela da calculadora com a expressão atual
function updateScreen() {
  screen.textContent = expression;
}

// calcula o resultado da expressão na tela da calculadora
function calculate() {
  const result = eval(expression);
  expression = result.toString();
  updateScreen();
}

// adiciona um event listener para o botão de limpar
clearButton.addEventListener("click", clearScreen);

// adiciona um event listener para o botão de igual
equalButton.addEventListener("click", calculate);
