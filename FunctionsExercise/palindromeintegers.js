function palindromeintegers (arr) {

    function checkIfPalindrome(num) {
        const numString = num.toString();
        let numStringReversed = ``;

        for (let i = numString.length - 1; i >= 0; i--) {
            const curChar = numString[i];
            numStringReversed += curChar;
        }

        return numStringReversed === numString;
    }

    for (const num of arr) {
        console.log(checkIfPalindrome(num));
    }
}
palindromeintegers([123,323,421,121])