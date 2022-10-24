const operatorButtons = document.querySelectorAll(".operator");
const numberButtons = document.querySelectorAll(".number");
const display = document.querySelector(".display");
const clearButton = document.querySelector(".clear");
const equalButton = document.querySelector(".equals");
let currentOperator;
let firstNumber;
let secondNumber;

const operate = (operator, numOne, numTwo) => {
  switch (operator) {
    case "addition":
      display.innerHTML = `${parseInt(numOne) + parseInt(numTwo)}`;
      console.log("added");
      break;
    case "subtraction":
      display.innerHTML = `${parseInt(numOne) - parseInt(numTwo)}`;
      console.log("subtracted");
      break;
    case "multiply":
      display.innerHTML = `${parseInt(numOne) * parseInt(numTwo)}`;
      console.log("multiplied");
      break;
    case "division":
      display.innerHTML = `${parseInt(numOne) / parseInt(numTwo)}`;
      console.log("divided");
      break;
  }
}

numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (!firstNumber) {
      firstNumber = button.innerText;
      display.innerHTML = button.innerText;
    }
    secondNumber = button.innerText;
    display.innerHTML = button.innerText;
  });
});

operatorButtons.forEach(button => {
  button.addEventListener("click", () => {
    currentOperator = button.id;
    display.innerHTML = button.id.charAt(0).toUpperCase() + button.id.slice(1);
  });
});

equalButton.addEventListener("click", () => {
  if (!currentOperator || !firstNumber || !secondNumber) return;
  operate(currentOperator, firstNumber, secondNumber);
});

clearButton.addEventListener("click", () => {
  currentOperator = "";
  firstNumber = "";
  secondNumber = "";
  display.innerHTML = "";
});