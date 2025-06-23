function sequences (arr) {
    const uniqueArrays = new Set();

    for (const jsonString of arr) {
        const parsedArray = JSON.parse(jsonString);

        const sortedArray = parsedArray.sort((a, b) => a - b);
        uniqueArrays.add(JSON.stringify(sortedArray));
    }

    const uniqueArraysList = Array.from(uniqueArrays).map(str => JSON.parse(str));

    uniqueArraysList.sort((a, b) => a.length - b.length);

    for (const array of uniqueArraysList) {
        console.log(`[${array.sort((a, b) => b - a).join(', ')}]`);
    }


}
sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",

    "[10, 1, -17, 0, 2, 13]",
    
    "[4, -3, 3, -2, 2, -1, 1, 0]"])