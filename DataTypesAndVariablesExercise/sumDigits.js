function sumDigits (num) {
    let sum = 0;
    let numStr = num + '';
    
    for (let i = 0; i < numStr.length; i++) {
        let curDigit = Number(numStr[i]);
        sum += curDigit
    }

    console.log(sum)


}
sumDigits(245678)