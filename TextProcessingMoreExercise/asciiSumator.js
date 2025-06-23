function asciiSumator (arr) {
    const firstChar = arr[0];
    const secondChar = arr[1];
    const text = arr[2];
    
    let sum = 0;
    let firstCharAscii = firstChar.charCodeAt();
    let secondCharAscii = secondChar.charCodeAt();
    let splitText = text.split('');

    if (firstCharAscii > secondCharAscii) {
        [firstCharAscii, secondCharAscii] = [secondCharAscii, firstCharAscii];
    }
    
    for (const char of splitText) {
        let asciiAmount = char.charCodeAt();

        if (asciiAmount > firstCharAscii && asciiAmount < secondCharAscii) {
            sum += asciiAmount;
        }
    }
    console.log(sum)
}
asciiSumator
([
    '.',

    '@',
    
    'dsg12gr5653feee5'
])