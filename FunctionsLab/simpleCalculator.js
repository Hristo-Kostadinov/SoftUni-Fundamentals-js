function simpleCalculator (number1, number2, operator) {

    let multiply = (x, y) => x * y;
    let sum = (x, y) => x + y;
    let subtract = (x, y) => x - y;
    let divide = (x, y) => x / y;

    switch (operator) {
        case `multiply`:
            console.log(multiply(number1, number2));
            break;
        case `add`:
            console.log(sum(number1, number2));
            break;
        case `divide`:
            console.log(divide(number1, number2));
            break;
        case `subtract`:
            console.log(subtract(number1, number2));
            break;
    }


}
simpleCalculator(5, 10, `add`)