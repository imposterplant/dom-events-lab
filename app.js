/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let currentInput = '';
let previousInput = '';
let operator = '';

/*------------------------ Cached Element References ------------------------*/
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');

/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', (event) => {
  const button = event.target;

  if (button.classList.contains('number')) {
    handleNumberClick(button.innerText);
  }

  if (button.classList.contains('operator')) {
    handleOperatorClick(button.innerText);
  }

  if (button.classList.contains('equals')) {
    handleEqualsClick();
  }

  if (button.innerText === 'C') {
    handleClearClick();
  }
});

/*-------------------------------- Functions --------------------------------*/
function handleNumberClick(number) {
  currentInput += number;
  display.textContent = currentInput;
}

function handleOperatorClick(op) {
  if (currentInput === '') return;
  previousInput = currentInput;
  currentInput = '';
  operator = op;
}

function handleEqualsClick() {
  if (previousInput === '' || currentInput === '') return;

  let result;
  switch (operator) {
    case '+':
      result = parseFloat(previousInput) + parseFloat(currentInput);
      break;
    case '-':
      result = parseFloat(previousInput) - parseFloat(currentInput);
      break;
    case '*':
      result = parseFloat(previousInput) * parseFloat(currentInput);
      break;
    case '/':
      result = parseFloat(previousInput) / parseFloat(currentInput);
      break;
    default:
      return;
  }

  display.textContent = result;
  currentInput = result.toString();
  previousInput = '';
  operator = '';
}

function handleClearClick() {
  currentInput = '';
  previousInput = '';
  operator = '';
  display.textContent = '0';
}
