function signCheck (num1, num2, num3) {
    let product = num1 * num2 * num3;

    if (product > 0) {
        console.log(`Positive`);
    } else if (product < 0) {
        return console.log(`Negative`);
    } else {
        return console.log(`Zero`);
    }
}
signCheck(5,12,-15)