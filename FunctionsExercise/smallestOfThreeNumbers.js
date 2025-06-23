function smallestOfThreeNumbers (num1, num2, num3) {
    let curNum = num1;

    if (num2 < curNum) {
        curNum = num2;
    }

    if (num3 < curNum) {
        curNum = num3;
    }
    console.log(curNum);
}
smallestOfThreeNumbers(2, 5, 3)