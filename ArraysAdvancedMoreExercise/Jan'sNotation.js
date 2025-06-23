function JansNotation (arr) {

    const operators = ['+', '-', '/', '*'];
    let stack = [];
    let operatorsCount = 0;
    let operandsCount = 0;

    for (const tokens of arr) {
        if (typeof tokens === 'number') {
            operandsCount++;
            stack.push(tokens);
        } else if (operators.includes(tokens)) {
            operatorsCount++;
            if (stack.length < 2) {
                console.log("Error: not enough operands!");
                return;
            }
           
            let b = stack.pop();
            let a = stack.pop();

        
            switch (tokens) {
                case '+':
                    stack.push(a + b);
                    break;
                case '-':
                    stack.push(a - b);
                    break;
                case '/':
                    stack.push(a / b);
                    break;
                case '*':
                    stack.push(a * b);
                    break;
                default:
                    console.log(`Error! operator is not from the ones shown.`);
                    return;
            }
        }
    }

    if (stack.length > 1) {
        console.log("Error: too many operands!");
    } else {
        console.log(stack[0]);
    }
}
JansNotation([3, 4, '+'])
