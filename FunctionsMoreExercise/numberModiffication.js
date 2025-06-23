function numberModiffication (num) {

    strNum = num.toString();
    let sum = 0;

    for(let i = 0; i < strNum.length; i++) {
        sum += Number(strNum[i]);
    }

    averageSum = sum / strNum.length;

    while (averageSum < 5) {
        strNum += `9`;
        sum += 9;
        averageSum = sum / strNum.length;
    }
    let modifiedNum = Number(strNum);

    console.log(modifiedNum);
}
numberModiffication(101)
