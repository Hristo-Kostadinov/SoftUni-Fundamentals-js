function maxNumber (array) {

    let topNums = [];

    for (let i = 0; i < array.length; i++) {
        let curNum = array[i];
        let isTop = true;

        for (let j = i + 1; j < array.length; j++) {
            let numToRight = array[j];

            if (curNum <= numToRight) {
                isTop = false;
                break;
            }
        }

        if (isTop) {
            topNums.push(curNum);
        }

    }
    console.log(topNums.join(` `));

}
maxNumber([1, 4, 3, 2])