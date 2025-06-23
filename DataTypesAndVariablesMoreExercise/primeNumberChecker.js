function primeNumberChecker(number) {
    let isPrime = true;

    if (number <= 1) {
        isPrime = false;
    } else {
        
        for (let i = 2; i <= number - 1; i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    console.log(isPrime);
}
primeNumberChecker(7)
// primeNumberChecker(8)
// primeNumberChecker(81)