function negativeOrpositiveNumbers (arr) {

    result = [];
    for (let i = 0; i < arr.length; i++) {

        if(arr[i] < 0) {
            result.unshift(arr[i]);
        } else {
            result.push(arr[i]);
        }
        
    }
    console.log(result.join(`\n`));
}
negativeOrpositiveNumbers(['7', '-2', '8', '9', `0`])