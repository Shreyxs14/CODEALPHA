let display = document.getElementById("display");
let currentInput = "";
let operator = null;
let previousInput = "";

function appendNumber(number) {
  if (currentInput.length < 10) {
    currentInput += number;
    updateDisplay();
  }
}

function appendOperator(op) {
  if (currentInput === "" && previousInput) {
    operator = op;
    return;
  }
  if (currentInput && previousInput && operator) {
    calculateResult();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = "";
}

function updateDisplay() {
  display.innerText = currentInput || previousInput || "0";
}

function clearDisplay() {
  currentInput = "";
  previousInput = "";
  operator = null;
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function calculateResult() {
  let result;
  const prev = parseFloat(previousInput);
  const curr = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(curr)) return;

  switch (operator) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "*":
      result = prev * curr;
      break;
    case "/":
      if (curr === 0) {
        alert("Cannot divide by zero!");
        clearDisplay();
        return;
      }
      result = prev / curr;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = null;
  previousInput = "";
  updateDisplay();
}
