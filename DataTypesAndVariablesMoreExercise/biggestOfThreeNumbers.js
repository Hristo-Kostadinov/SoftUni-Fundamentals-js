function biggestOfThreeNumbers (num1,num2,num3) {

    let biggestNum = num1;

    if (num2 > biggestNum) {
        biggestNum = num2
    }

    if (num3 > biggestNum) {
        biggestNum = num3;
    }

    console.log(biggestNum);

}
biggestOfThreeNumbers(-2,7,3)