function integerToVariable (a, b, c,) {


    const sum = a + b + c;
    const sumString = `${sum}`;

    let isFloat = false;
    for (let i = 0; i < sumString.length; i++) {
        if (sumString[i] === ".") {
            isFloat = true;
            break;
        }
    }

        const output = isFloat ? 'Float' : "Integer";
        console.log(`${sum} - ${output}`);
    // if (isFloat) {
    //     console.log(`${sum} - Float`);
    // } else {
    //     console.log(`${sum} - Integer`);
    // }
}
integerToVariable(9, 100, 1.1)
integerToVariable(100, 200, 300)