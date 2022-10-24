const operatorButtons = document.querySelectorAll(".operator");
const numberButtons = document.querySelectorAll(".number");
const display = document.querySelector(".display");
const clearButton = document.querySelector(".clear");
const equalButton = document.querySelector(".equals");
let currentOperator;
let firstNumber = "";
let secondNumber = "";
let result = 0;

// const displayResult = (calculated) => {
//   display.innerHTML = calculated;
// }

const operate = (operator, numOne, numTwo) => {
  switch (operator) {
    case "addition":
      display.innerHTML = `${parseInt(numOne) + parseInt(numTwo)}`;
      result = parseInt(numOne) + parseInt(numTwo);
      firstNumber = result;
      secondNumber = "";
      currentOperator = undefined;
      break;
    case "subtraction":
      display.innerHTML = `${parseInt(numOne) - parseInt(numTwo)}`;
      result = parseInt(numOne) - parseInt(numTwo);
      firstNumber = result;
      secondNumber = "";
      currentOperator = undefined;
      break;
    case "multiply":
      display.innerHTML = `${parseInt(numOne) * parseInt(numTwo)}`;
      result = parseInt(numOne) * parseInt(numTwo);
      firstNumber = result;
      secondNumber = "";
      currentOperator = undefined;
      break;
    case "division":
      display.innerHTML = `${parseInt(numOne) / parseInt(numTwo)}`;
      result = parseInt(numOne) / parseInt(numTwo);
      firstNumber = result;
      secondNumber = "";
      currentOperator = undefined;
      break;
  }
}

numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (!result && !currentOperator) {
      firstNumber += button.innerText;
      display.innerHTML = firstNumber;
      return;
    }
    secondNumber += button.innerText;
    display.innerHTML = secondNumber;
  });
});

operatorButtons.forEach(button => {
  button.addEventListener("click", () => {
    // if (!result && !currentOperator) {
    //   currentOperator = button.id;
    //   display.innerHTML = button.id.charAt(0).toUpperCase() + button.id.slice(1);
    //   return;
    // }
    if (!currentOperator) {
      if (!result) {
        currentOperator = button.id;
        display.innerHTML = button.id.charAt(0).toUpperCase() + button.id.slice(1);
        return;
      }
      currentOperator = button.id;
      display.innerHTML = button.id.charAt(0).toUpperCase() + button.id.slice(1);
      return;
    }
    operate(currentOperator, firstNumber, secondNumber);
    currentOperator = button.id;
  });
});

equalButton.addEventListener("click", () => {
  if (!currentOperator || !firstNumber || !secondNumber) return;
  operate(currentOperator, firstNumber, secondNumber);
});

clearButton.addEventListener("click", () => {
  result = 0;
  currentOperator = "";
  firstNumber = "";
  secondNumber = "";
  display.innerHTML = "";
});