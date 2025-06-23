function sorting (arr) {
    const sortedArr = arr.sort((a,b) => a - b);
    
    let newArr = [];

    while (sortedArr.length > 0) {

        const lastElement = sortedArr.pop();
        newArr.push(lastElement);

        const firstElement = sortedArr.shift();
        newArr.push(firstElement);

        
    }

    console.log(newArr.join(` `));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])