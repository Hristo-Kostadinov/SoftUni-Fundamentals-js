function equalArrays (arr1, arr2) {

    let sum = 0;
    let isEqual = true;
    let notEqual = 0;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
           sum += Number(arr1[i]);
        } else {
            isEqual = false;
            notEqual = i;
            break;
        }
    
    }
    if (isEqual === true) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else if (isEqual === false) {
        console.log(`Arrays are not identical. Found difference at ${notEqual} index`);
    }

}
equalArrays(
    ['1','2','3','4','5'],

    ['1','2','4','4','5']
)
