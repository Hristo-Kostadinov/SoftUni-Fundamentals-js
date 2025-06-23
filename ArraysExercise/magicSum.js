function magicSum (arr, targetSum) {

    finalArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === targetSum) {
                finalArr.push(arr[i] + ` ` + arr[j]);
            }
        }
    }
    for (let i = 0; i < finalArr.length; i++) {
        console.log(finalArr[i]);
    }

}
magicSum([1, 7, 6, 2, 19, 23],8)