const display = document.querySelector('.calculator-display');
const buttons = document.querySelectorAll('.calculator-buttons li');
let expression = '';

const operators = ['+', '-', '*', '/'];

function updateDisplay(value) {
    display.textContent = value;
}

function clearExpression() {
    expression = '';
    updateDisplay('0');
}

function appendValue(value) {
    const lastChar = expression.slice(-1);

    if (value === '0' && expression === '0') {
        return;
    }

    if (operators.includes(value)) {
        if (expression === '' || operators.includes(lastChar)) {
            return;
        }
    }

    if (expression === '0' && value !== '.' && !operators.includes(value)) {
        expression = value;
    } else {
        expression += value;
    }

    updateDisplay(expression);
}

function calculateExpression() {
    if (expression === '') {
        return;
    }

    const lastChar = expression.slice(-1);
    if (operators.includes(lastChar)) {
        return;
    }

    try {
        const result = Function(`"use strict"; return (${expression})`)();
        expression = String(result);
        updateDisplay(expression);
    } catch (error) {
        updateDisplay('Error');
        expression = '';
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent.trim();

        if (value === 'C') {
            clearExpression();
            return;
        }

        if (value === '=') {
            calculateExpression();
            return;
        }

        appendValue(value);
    });
});

clearExpression();


