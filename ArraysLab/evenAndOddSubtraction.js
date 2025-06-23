function evenAndOddSubtraction (arr) {

    let evenSum = 0;
    let unevenSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) % 2 === 0) {
            evenSum += Number(arr[i]);
        } else if (Number(arr[i]) % 2 !== 0) {
            unevenSum += Number(arr[i]);
        }
        
    }
    let difference = evenSum - unevenSum;
    console.log(difference);
}
evenAndOddSubtraction([3,5,7,9])