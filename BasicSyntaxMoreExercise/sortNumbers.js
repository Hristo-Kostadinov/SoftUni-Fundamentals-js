function sortNumbers(num1, num2, num3) {
    if (num1 < num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }
    if (num2 < num3) {
        let temp = num2;
        num2 = num3;
        num3 = temp;
    }
    if (num1 < num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }
    
    console.log(num1 + "\n" + num2 + "\n" + num3);
}

sortNumbers(3, 1, 4);