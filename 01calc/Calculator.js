document.addEventListener('DOMContentLoaded', function() {
    const numberDisplay = document.querySelector('.number-display');
    const numberButtons = document.querySelectorAll('.number');
    const operatorButtons = document.querySelectorAll('.operator');
    const equalButton = document.querySelector('.equal');
    const clearButton = document.querySelector('.clear');

    let currentOperand = '';

    function updateDisplay() {
        numberDisplay.textContent = currentOperand || '0';
    }

    function handleButtonClick(value) {
        currentOperand += value;
        updateDisplay();
    }

    function evaluateExpression() {
        try {
            const result = eval(currentOperand);
            currentOperand = result.toString();
            updateDisplay();
        } catch (error) {
            alert("Invalid Expression");
        }
    }

    function clearOperand() {
        currentOperand = '';
        updateDisplay();
    }

    numberButtons.forEach(button => {
        button.addEventListener('click', function() {
            handleButtonClick(button.textContent);
        });
    });

    operatorButtons.forEach(button => {
        button.addEventListener('click', function() {
            handleButtonClick(button.textContent);
        });
    });

    equalButton.addEventListener('click', evaluateExpression);

    clearButton.addEventListener('click', clearOperand);

    updateDisplay();
});
