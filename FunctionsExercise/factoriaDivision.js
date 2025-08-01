function factoriaDivision (num1, num2) {

    function calculateFactorial (num) {
        let factorial = 1;

        for (let factor = 2; factor <= num; factor++) {
            factorial *= factor;
        }
        return factorial;
    }

    const factorial1 = calculateFactorial(num1);
    const factorial2 = calculateFactorial(num2);

    const result = factorial1 / factorial2;
    console.log(result.toFixed(2));
}
factoriaDivision(5, 2)