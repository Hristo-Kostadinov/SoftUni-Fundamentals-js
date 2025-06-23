function condenseArrayToNumber (arr) {

   while (arr.length > 1) {
        condenced = [];
        for (let i = 0; i < arr.length - 1; i++) {
            condenced.push(arr[i] + arr[i + 1]);
        }
        arr = condenced;
    }
    console.log(arr[0])
}
condenseArrayToNumber([2,10,3])

