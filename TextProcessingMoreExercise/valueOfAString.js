function valueOfAString(arr) {
    const firstLine = arr[0];
    const lowerOrUpper = arr[1];
    let lowerSum = 0;
    let upperSum = 0;

    for (let i = 0; i < firstLine.length; i++) {
        const charCode = firstLine.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) { // 'a' to 'z'
            lowerSum += charCode;
        } else if (charCode >= 65 && charCode <= 90) { // 'A' to 'Z'
            upperSum += charCode;
        }
    }

    if (lowerOrUpper === 'LOWERCASE') {
        console.log(`The total sum is: ${lowerSum}`);
    } else if (lowerOrUpper === 'UPPERCASE') {
        console.log(`The total sum is: ${upperSum}`);
    }
}
valueOfAString(['HelloFromMyAwesomePROGRAM',

    'LOWERCASE'
])

// function valueOfAString(arr) {
//     const firstLine = arr[0];
//     const lowerOrUpper = arr[1];
//     let lowerSum = 0;
//     let upperSum = 0;

//     for (let i = 0; i < firstLine.length; i++) {
//         const char = firstLine[i];
//         if (char >= 'a' && char <= 'z') {
//             lowerSum += char.charCodeAt(0);
//         } else if (char >= 'A' && char <= 'Z') {
//             upperSum += char.charCodeAt(0);
//         }
//     }

//     if (lowerOrUpper === 'LOWERCASE') {
//         console.log(`The total sum is: ${lowerSum}`);
//     } else if (lowerOrUpper === 'UPPERCASE') {
//         console.log(`The total sum is: ${upperSum}`);
//     }
// }