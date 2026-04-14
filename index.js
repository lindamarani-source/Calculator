function calculate(a, b) {
    return {
        addition: a + b,
        multiplication: a * b,
        division: a / b,
        subtraction: a - b
    }
}

const result = (a, b) => {
    return {
        addition: a + b,
        multiplication: a * b,
        division: a / b,
        subtraction: a - b
    }
}

let history = [];

function addToHistory(a, b) {
    const calcResult = {
        addition: a + b,
        multiplication: a * b,
        division: a / b,
        subtraction: a - b
    }
    history.push(calcResult);
    return calcResult;
}

// Example usage
console.log(calculate(5, 3));
console.log(addToHistory(5, 3));
console.log(history);
